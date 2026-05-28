import { chromium, Page } from 'playwright';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
// @ts-expect-error no typings
import { gfm } from 'turndown-plugin-gfm';
import fs from 'fs-extra';
import path from 'path';
import crypto from 'crypto';
import slugify from 'slugify';
import { normalizeBinanceRestSchema } from './normalizers/binanceRest.js';
import { buildRegistry } from './registry/buildRegistry.js';
import { getAdapter, SUPPORTED_EXCHANGES } from './core/getAdapter.js';
import { extractWebsocketSchemas } from './websocket/extractors/extractWebsocketSchemas.js';
import { normalizeWebsocketSchema } from './websocket/normalizers/normalizeWebsocketSchema.js';
import { validateWebsocketStateModel } from './websocket/validators/validateWebsocketStateModel.js';
import { detectProvider } from './providers/detectProvider.js';
import { discoverSpecUrls } from './specs/discoverSpecUrls.js';
import { ingestSpecs } from './specs/ingestSpecs.js';
import { compileSpecsToRuntime } from './compiler/compileSpecsToRuntime.js';
import { buildExecutionRuntime } from './runtime/execution/buildExecutionRuntime.js';
import type { CheerioAPI } from 'cheerio';
import type { Adapter, RunStats } from './types.js';

const KB_DIR = path.resolve(process.env.KB_DIR || 'knowledge_base');
const BUILD_DIR = path.resolve(process.env.BUILD_DIR || '.build');
const COMBINED_README = (process.env.COMBINED_README || 'true').toLowerCase() === 'true';
const MAX_RETRIES = Number(process.env.MAX_RETRIES || 3);
const REQUEST_DELAY_MS = Number(process.env.REQUEST_DELAY_MS || 750);
const CONCURRENCY = Number(process.env.CONCURRENCY || 4);
const MIN_MARKDOWN_LENGTH = Number(process.env.MIN_MARKDOWN_LENGTH || 300);

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
turndown.use(gfm);
turndown.addRule('fencedCodeWithLanguage', {
  filter: (node: HTMLElement) =>
    Boolean(node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE'),
  replacement: (_content: string, node: any) => {
    const firstChild = node.firstChild as HTMLElement | null;
    if (!firstChild) return '';
    const className = firstChild.getAttribute('class') || '';
    const lang = (className.match(/language-([\w-]+)/) || [])[1] || '';
    const code = firstChild.textContent || '';
    return `\n\n\`\`\`${lang}\n${code.replace(/\n$/, '')}\n\`\`\`\n\n`;
  },
});

class ExchangeScraper {
  private adapter: Adapter;
  private rawDir: string;
  private markdownDir: string;
  private assetDir: string;
  private metadataDir: string;
  private schemasDir: string;
  private chunksDir: string;
  private failuresDir: string;
  private runsDir: string;
  private websocketDir: string;
  private stateFile: string;

  private visited = new Set<string>();
  private enqueued = new Set<string>();
  private pageResults: { title: string; url: string; outPath: string }[] = [];
  private crawlState = new Map<string, any>();
  private normalizedSchemas: any[] = [];
  
  private runStats: RunStats = {
    startedAt: new Date().toISOString(),
    finishedAt: null,
    pagesVisited: 0,
    pagesWritten: 0,
    pagesSkipped: 0,
    assetsDownloaded: 0,
    failures: [],
    compiledOpenApi: 0,
    compiledAsyncApi: 0,
    runtimeRestExecutors: 0,
    runtimeWebsocketExecutors: 0,
  };

  constructor(public exchange: string) {
    this.adapter = getAdapter(exchange);
    
    // KB (Final Outputs)
    this.markdownDir = path.join(KB_DIR, 'markdown', exchange);
    this.assetDir = path.join(KB_DIR, '_assets');
    this.chunksDir = path.join(KB_DIR, 'chunks');
    this.websocketDir = path.join(KB_DIR, 'websocket');
    
    // Build Cache (Intermediate)
    this.rawDir = path.join(BUILD_DIR, 'raw', exchange);
    this.metadataDir = path.join(BUILD_DIR, 'metadata');
    this.schemasDir = path.join(BUILD_DIR, 'schemas');
    this.failuresDir = path.join(BUILD_DIR, 'failures');
    this.runsDir = path.join(BUILD_DIR, 'runs');
    this.stateFile = path.join(BUILD_DIR, `crawl_state_${exchange}.json`);
  }

  private buildOutputPath(url: string) {
    const parsed = new URL(url);
    let pathname = parsed.pathname.replace(/^\/docs\//, '');
    if (pathname.endsWith('/')) pathname += 'index';
    return path.join(this.markdownDir, `${pathname}.md`);
  }

  private classifyPage(markdown: string, url: string) {
    const lower = markdown.toLowerCase();
    if (/\/(fapi|dapi)\/v\d+\//.test(markdown) && /\b(get|post|put|delete|patch)\b/i.test(markdown))
      return 'rest_endpoint';
    if (lower.includes('websocket') || lower.includes('stream name')) return 'websocket_stream';
    if (lower.includes('error code') || lower.includes('error codes')) return 'error_codes';
    if (lower.includes('rate limit') || lower.includes('request weight')) return 'rate_limits';
    if (lower.includes('authentication') || lower.includes('api key')) return 'auth';
    if (url.includes('/change-log')) return 'changelog';
    return 'examples';
  }

  private compileChunks(markdown: string, schema: any, url: string, title: string) {
    const chunks = [];
    if (schema.path && schema.method) {
      chunks.push({
        type: 'endpoint',
        endpoint: schema.path,
        method: schema.method,
        content: markdown,
        code_examples: schema.response_examples,
        params: schema.parameters,
        source_url: url,
        title,
      });
    }

    const headings = [...markdown.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
    headings.forEach((heading) => {
      chunks.push({ type: 'heading', heading, source_url: url, title });
    });

    return chunks;
  }

  private hashContent(input: string) {
    return crypto.createHash('sha256').update(input).digest('hex');
  }

  private validateMarkdown(title: string, markdown: string) {
    if (!title || !title.trim()) throw new Error('validation_failed: missing_title');
    if (markdown.includes('Loading...')) throw new Error('validation_failed: loading_artifact');
    if (markdown.length < MIN_MARKDOWN_LENGTH) throw new Error('validation_failed: suspiciously_small_markdown');
  }

  private async loadState() {
    if (!(await fs.pathExists(this.stateFile))) return;
    const state = await fs.readJson(this.stateFile);
    for (const row of state.pages || []) this.crawlState.set(row.url, row);
  }

  private async saveState() {
    const pages = [...this.crawlState.values()].sort((a, b) => a.url.localeCompare(b.url));
    await fs.writeJson(this.stateFile, { updated_at: new Date().toISOString(), pages }, { spaces: 2 });
  }

  private async persistFailure(url: string, error: any, retryCount = MAX_RETRIES) {
    const failure = {
      url,
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      retry_count: retryCount,
    };
    this.runStats.failures.push(failure);
    await fs.ensureDir(this.failuresDir);
    const name = `${Date.now()}-${slugify(url, { lower: true, strict: true }).slice(0, 80)}.json`;
    await fs.writeJson(path.join(this.failuresDir, name), failure, { spaces: 2 });
  }

  private async saveRunStats() {
    this.runStats.finishedAt = new Date().toISOString();
    await fs.ensureDir(this.runsDir);
    const file = path.join(this.runsDir, `crawl-run-${this.exchange}-${this.runStats.startedAt.replace(/[:.]/g, '-')}.json`);
    await fs.writeJson(file, this.runStats, { spaces: 2 });
  }

  private async withRetry<T>(fn: () => Promise<T>, label: string): Promise<T> {
    let lastErr: any;
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
      try {
        return await fn();
      } catch (err: any) {
        lastErr = err;
        await new Promise((r) => setTimeout(r, REQUEST_DELAY_MS * 2 ** (attempt - 1)));
        console.warn(`[retry ${attempt}/${MAX_RETRIES}] ${label}: ${err.message}`);
      }
    }
    throw lastErr;
  }

  private async downloadAssets($: CheerioAPI, pageUrl: string) {
    const assets: { remote: string; local: string }[] = [];
    const urls = new Set<string>();
    $('img[src], a[href]').each((_: number, el: any) => {
      const raw = $(el).attr('src') || $(el).attr('href');
      if (!raw) return;
      const absolute = new URL(raw, pageUrl);
      if (!absolute.pathname.includes('/assets/')) return;
      urls.add(absolute.toString());
    });

    for (const assetUrl of urls) {
      try {
        const parsed = new URL(assetUrl);
        const localPath = path.join(this.assetDir, parsed.pathname.replace(/^\//, ''));
        await fs.ensureDir(path.dirname(localPath));
        const res = await fetch(assetUrl);
        if (!res.ok) continue;
        await fs.writeFile(localPath, Buffer.from(await res.arrayBuffer()));
        assets.push({ remote: assetUrl, local: localPath });
        this.runStats.assetsDownloaded += 1;
      } catch {
        // ignore single asset failure
      }
    }
    return assets;
  }

  private async scrapeOne(page: Page, url: string) {
    if (this.visited.has(url)) return [];
    this.visited.add(url);
    this.runStats.pagesVisited += 1;

    const response = await this.withRetry(
      async () => page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 }),
      `goto ${url}`,
    );
    await page.waitForTimeout(REQUEST_DELAY_MS);

    const html = await page.content();
    const rawPath = path.join(
      this.rawDir,
      `${slugify(new URL(url).pathname || 'index', { lower: true, strict: true })}.html`,
    );
    await fs.ensureDir(path.dirname(rawPath));
    await fs.writeFile(rawPath, html);
    const $ = cheerio.load(html);
    const links = this.adapter.discoverLinks($, url);
    const provider = detectProvider(html);
    const discoveredSpecs = discoverSpecUrls($, url);
    this.adapter.cleanDocument($);

    const title = $('h1').first().text().trim() || $('title').text().trim() || 'Untitled';
    const contentHtml = this.adapter.selectMainContent($);
    if (!contentHtml) throw new Error('selector_failed: no_main_content');

    const markdownBody = turndown.turndown(contentHtml).trim();
    this.validateMarkdown(title, markdownBody);

    const contentHash = this.hashContent(markdownBody);
    const prev = this.crawlState.get(url);
    const etag = response?.headers()?.etag || null;
    const lastModified = response?.headers()?.['last-modified'] || null;

    if (prev && prev.contentHash === contentHash) {
      this.crawlState.set(url, { ...prev, etag, lastModified, unchanged_at: new Date().toISOString() });
      this.runStats.pagesSkipped += 1;

      const schemaPath = path.join(this.schemasDir, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
      if (await fs.pathExists(schemaPath)) {
        try {
          const existing = await fs.readJson(schemaPath);
          if (existing?.normalizedSchemas) {
            this.normalizedSchemas.push(...existing.normalizedSchemas.filter((s: any) => s.id));
          } else if (existing?.normalized?.id) {
            this.normalizedSchemas.push(existing.normalized);
          }
        } catch {
          // file doesn't exist or is invalid
        }
      }

      return links;
    }

    const outPath = this.buildOutputPath(url);
    await fs.ensureDir(path.dirname(outPath));

    const kind = this.classifyPage(markdownBody, url);
    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `url: ${url}`,
      `kind: ${kind}`,
      'category: docs',
      `source: ${this.exchange}`,
      `scraped_at: ${new Date().toISOString()}`,
      '---',
      '',
    ].join('\n');
    const finalMarkdown = `${frontmatter}# ${title}\n\n> Source: ${url}\n\n${markdownBody}\n`;
    await fs.writeFile(outPath, finalMarkdown);

    const pageContainer = cheerio.load(contentHtml);
    const assets = await this.downloadAssets(pageContainer, url);
    const extractedSchemas = this.adapter.extractApiSchemas(markdownBody, url);
    const pageNormalizedSchemas = extractedSchemas.map((s) => normalizeBinanceRestSchema(s));

    const chunks =
      extractedSchemas.length > 0
        ? extractedSchemas.flatMap((s) => this.compileChunks(markdownBody, s, url, title))
        : this.compileChunks(markdownBody, {}, url, title);

    let websocketSchemas: any[] = [];
    if (kind === 'websocket_stream') {
      const extractedWs = extractWebsocketSchemas(markdownBody);
      websocketSchemas = normalizeWebsocketSchema({
        exchange: this.exchange,
        market: pageNormalizedSchemas[0]?.market || 'unknown',
        extracted: extractedWs,
      });
      websocketSchemas = websocketSchemas.filter((ws: any) => validateWebsocketStateModel(ws).valid);
      const wsPath = path.join(this.websocketDir, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
      await fs.ensureDir(path.dirname(wsPath));
      await fs.writeJson(wsPath, websocketSchemas, { spaces: 2 });
    }

    const schemaPath = path.join(this.schemasDir, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
    const chunksPath = path.join(this.chunksDir, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
    await fs.ensureDir(path.dirname(schemaPath));
    await fs.ensureDir(path.dirname(chunksPath));

    await fs.writeJson(
      schemaPath,
      { rawSchemas: extractedSchemas, normalizedSchemas: pageNormalizedSchemas },
      { spaces: 2 },
    );
    await fs.writeJson(chunksPath, chunks, { spaces: 2 });

    pageNormalizedSchemas.forEach((s: any) => {
      if (s.id) this.normalizedSchemas.push(s);
    });

    const pageSlug = slugify(new URL(url).pathname, { lower: true, strict: true });
    const specArtifacts = await ingestSpecs({ kbDir: KB_DIR, pageSlug, discovered: discoveredSpecs });

    const metadata = {
      title,
      url,
      kind,
      provider,
      output_path: path.relative(KB_DIR, outPath),
      extracted_at: new Date().toISOString(),
      assets: assets.map((a) => ({ remote: a.remote, local: path.relative(KB_DIR, a.local) })),
      schema_path: path.relative(BUILD_DIR, schemaPath),
      normalized_id:
        pageNormalizedSchemas
          .map((s) => s.id)
          .filter(Boolean)
          .join(',') || null,
      chunks_path: path.relative(KB_DIR, chunksPath),
      websocket_schemas: websocketSchemas.length > 0 ? websocketSchemas.length : 0,
      specs: { openapi: specArtifacts.openapi.length, asyncapi: specArtifacts.asyncapi.length },
    };

    const metadataPath = path.join(this.metadataDir, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
    await fs.ensureDir(path.dirname(metadataPath));
    await fs.writeJson(metadataPath, metadata, { spaces: 2 });

    this.crawlState.set(url, {
      url,
      etag,
      lastModified,
      contentHash,
      outputPath: path.relative(KB_DIR, outPath),
      updated_at: new Date().toISOString(),
    });
    this.pageResults.push({ title, url, outPath });
    this.runStats.pagesWritten += 1;

    return links;
  }

  private async writeReadme() {
    const lines = [`# ${this.exchange} Docs`, '', `Seed: ${this.adapter.startUrl}`, '', '## Pages', ''];
    this.pageResults
      .sort((a, b) => a.outPath.localeCompare(b.outPath))
      .forEach((page) =>
        lines.push(`- [${page.title}](./${path.relative(KB_DIR, page.outPath).replace(/\\/g, '/')})`),
      );
    await fs.writeFile(path.join(KB_DIR, `README_${this.exchange}.md`), `${lines.join('\n')}\n`);
  }

  public async run(browserPages: Page[]) {
    console.log(`\nStarting scraper for exchange: ${this.exchange}`);
    await fs.ensureDir(KB_DIR);
    await fs.ensureDir(BUILD_DIR);
    await fs.ensureDir(this.rawDir);
    await fs.ensureDir(this.markdownDir);
    await this.loadState();

    const queue = [this.adapter.normalizeUrl(this.adapter.startUrl)].filter(Boolean) as string[];
    this.enqueued.add(queue[0]);

    try {
      while (queue.length > 0) {
        const workers = browserPages.map(async (page) => {
          while (queue.length > 0) {
            const url = queue.shift();
            if (!url) return;
            try {
              const discovered = await this.scrapeOne(page, url);
              for (const link of discovered) {
                if (this.visited.has(link) || this.enqueued.has(link)) continue;
                this.enqueued.add(link);
                queue.push(link);
              }
            } catch (error: any) {
              await this.persistFailure(url, error);
              console.warn(`[skip] ${url}: ${error.message}`);
            }
          }
        });
        await Promise.all(workers);
      }

      if (COMBINED_README) await this.writeReadme();
      await buildRegistry({ kbDir: KB_DIR, normalizedRecords: this.normalizedSchemas });
      const compiledSummary = await compileSpecsToRuntime({
        kbDir: KB_DIR,
        exchange: this.exchange,
        market: 'usdm_futures', // Defaults; can be dynamic later if needed
      });
      this.runStats.compiledOpenApi = compiledSummary.openapi;
      this.runStats.compiledAsyncApi = compiledSummary.asyncapi;
      const executionSummary = await buildExecutionRuntime({ kbDir: KB_DIR });
      this.runStats.runtimeRestExecutors = executionSummary.restExecutors;
      this.runStats.runtimeWebsocketExecutors = executionSummary.websocketRuntimes;
      await this.saveState();
      await this.saveRunStats();
      console.log(
        `✅ [${this.exchange}] Done. Visited=${this.runStats.pagesVisited} Written=${this.runStats.pagesWritten} Skipped=${this.runStats.pagesSkipped} Failures=${this.runStats.failures.length}`,
      );
    } catch (error: any) {
      await this.persistFailure(this.adapter.startUrl, error, MAX_RETRIES);
      await this.saveRunStats();
      console.error(`❌ [${this.exchange}] Critical error:`, error);
    }
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const pages = await Promise.all(Array.from({ length: CONCURRENCY }, () => context.newPage()));

  try {
    const requestedExchange = process.env.EXCHANGE;
    const exchangesToRun = requestedExchange ? [requestedExchange] : SUPPORTED_EXCHANGES;

    for (const exchange of exchangesToRun) {
      const scraper = new ExchangeScraper(exchange);
      await scraper.run(pages);
    }
  } finally {
    await Promise.all(pages.map((p) => p.close()));
    await context.close();
    await browser.close();
  }
}

main().catch((error) => {
  console.error('Fatal execution error:', error);
  process.exitCode = 1;
});
