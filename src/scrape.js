const { chromium } = require('playwright');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');
const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
const slugify = require('slugify');
const { normalizeBinanceRestSchema } = require('./normalizers/binanceRest');
const { buildRegistry } = require('./registry/buildRegistry');
const { getAdapter } = require('./core/getAdapter');
const { extractWebsocketSchemas } = require('./websocket/extractors/extractWebsocketSchemas');
const { normalizeWebsocketSchema } = require('./websocket/normalizers/normalizeWebsocketSchema');
const { validateWebsocketStateModel } = require('./websocket/validators/validateWebsocketStateModel');
const { detectProvider } = require('./providers/detectProvider');
const { discoverSpecUrls } = require('./specs/discoverSpecUrls');
const { ingestSpecs } = require('./specs/ingestSpecs');
const { compileSpecsToRuntime } = require('./compiler/compileSpecsToRuntime');
const { buildExecutionRuntime } = require('./runtime/execution/buildExecutionRuntime');

const EXCHANGE = process.env.EXCHANGE || 'binance';
const ADAPTER = getAdapter(EXCHANGE);
const BASE_URL = ADAPTER.baseUrl;
const START_URL = ADAPTER.startUrl;
const ALLOWED_PATH_PREFIX = ADAPTER.allowedPathPrefix;
const OUTPUT_DIR = path.resolve(process.env.OUTPUT_DIR || 'docs');
const EXCHANGE_DIR = path.join(OUTPUT_DIR, 'exchange', EXCHANGE);
const RAW_DIR = path.join(OUTPUT_DIR, 'raw', EXCHANGE);
const MARKDOWN_DIR = path.join(OUTPUT_DIR, 'markdown', EXCHANGE);
const ASSET_DIR = path.join(OUTPUT_DIR, '_assets');
const METADATA_DIR = path.join(OUTPUT_DIR, '_metadata');
const SCHEMAS_DIR = path.join(OUTPUT_DIR, '_schemas');
const CHUNKS_DIR = path.join(OUTPUT_DIR, '_chunks');
const FAILURES_DIR = path.join(OUTPUT_DIR, '_failures');
const RUNS_DIR = path.join(OUTPUT_DIR, '_runs');
const WEBSOCKET_DIR = path.join(OUTPUT_DIR, '_websocket');
const STATE_FILE = path.join(OUTPUT_DIR, '_crawl_state.json');
const COMBINED_README = (process.env.COMBINED_README || 'true').toLowerCase() === 'true';
const MAX_RETRIES = Number(process.env.MAX_RETRIES || 3);
const REQUEST_DELAY_MS = Number(process.env.REQUEST_DELAY_MS || 750);
const CONCURRENCY = Number(process.env.CONCURRENCY || 4);
const MIN_MARKDOWN_LENGTH = Number(process.env.MIN_MARKDOWN_LENGTH || 300);

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
turndown.use(gfm);
turndown.addRule('fencedCodeWithLanguage', {
  filter: (node) => node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE',
  replacement: (_content, node) => {
    const className = node.firstChild.getAttribute('class') || '';
    const lang = (className.match(/language-([\w-]+)/) || [])[1] || '';
    const code = node.firstChild.textContent || '';
    return `\n\n\`\`\`${lang}\n${code.replace(/\n$/, '')}\n\`\`\`\n\n`;
  },
});

const visited = new Set();
const enqueued = new Set();
const pageResults = [];
const crawlState = new Map();
const normalizedSchemas = [];

const runStats = {
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

function normalizeUrl(raw) {
  return ADAPTER.normalizeUrl(raw);
}

function buildOutputPath(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname.replace(/^\/docs\//, '');
  if (pathname.endsWith('/')) pathname += 'index';
  return path.join(MARKDOWN_DIR, `${pathname}.md`);
}

function classifyPage(markdown, url) {
  const lower = markdown.toLowerCase();
  if (/\/(fapi|dapi)\/v\d+\//.test(markdown) && /\b(get|post|put|delete|patch)\b/i.test(markdown)) return 'rest_endpoint';
  if (lower.includes('websocket') || lower.includes('stream name')) return 'websocket_stream';
  if (lower.includes('error code') || lower.includes('error codes')) return 'error_codes';
  if (lower.includes('rate limit') || lower.includes('request weight')) return 'rate_limits';
  if (lower.includes('authentication') || lower.includes('api key')) return 'auth';
  if (url.includes('/change-log')) return 'changelog';
  return 'examples';
}

function cleanDocument($) {
  [
    'nav', 'header', 'footer', 'script', 'style', '.navbar', '.pagination-nav', '.theme-doc-footer',
    '.table-of-contents', '.breadcrumbs', '.menu', '.theme-edit-this-page', '.clean-btn', '.hash-link',
    '.DocSearch', '.mobile-nav', '.theme-back-to-top-button'
  ].forEach((s) => $(s).remove());
}

function selectMainContent($) {
  const selectors = ['article', 'main article', '.theme-doc-markdown', 'main'];
  let best = '';
  for (const selector of selectors) {
    const el = $(selector).first();
    const html = el.html() || '';
    if (el.text().trim().length > 200 && html.length > best.length) best = html;
  }
  return best;
}

function extractLinks($, currentUrl) {
  return ADAPTER.discoverLinks($, currentUrl);
}

function extractApiSchema(markdown) {
  const endpoint = markdown.match(/\/(fapi|dapi)\/v1\/[\w/-]+/)?.[0] || null;
  const method = markdown.match(/\b(GET|POST|PUT|DELETE|PATCH)\b/)?.[1] || null;
  const weight = Number(markdown.match(/Request Weight\s*:?\s*(\d+)/i)?.[1] || NaN);
  const security = markdown.match(/\b(TRADE|USER_DATA|USER_STREAM|MARKET_DATA)\b/i)?.[1] || null;

  const parameters = [...markdown.matchAll(/^\|\s*([A-Za-z0-9_]+)\s*\|\s*([^|]*)\|\s*([^|]*)\|/gm)]
    .map((m) => ({ name: m[1], type: m[2].trim(), description: m[3].trim() }))
    .filter((p) => p.name.toLowerCase() !== 'name');

  const responseExamples = [...markdown.matchAll(/```json\n([\s\S]*?)```/g)].map((m) => m[1].trim());

  return {
    id: endpoint && method ? slugify(`${method}-${endpoint}`, { lower: true, strict: true }) : null,
    path: endpoint,
    method,
    security,
    weight: Number.isFinite(weight) ? weight : null,
    parameters,
    response_examples: responseExamples,
    errors: [],
  };
}

function compileChunks(markdown, schema, url, title) {
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

function hashContent(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

function validateMarkdown(title, markdown) {
  if (!title || !title.trim()) throw new Error('validation_failed: missing_title');
  if (markdown.includes('Loading...')) throw new Error('validation_failed: loading_artifact');
  if (markdown.length < MIN_MARKDOWN_LENGTH) throw new Error('validation_failed: suspiciously_small_markdown');
}

async function loadState() {
  if (!(await fs.pathExists(STATE_FILE))) return;
  const state = await fs.readJson(STATE_FILE);
  for (const row of state.pages || []) crawlState.set(row.url, row);
}

async function saveState() {
  const pages = [...crawlState.values()].sort((a, b) => a.url.localeCompare(b.url));
  await fs.writeJson(STATE_FILE, { updated_at: new Date().toISOString(), pages }, { spaces: 2 });
}

async function persistFailure(url, error, retryCount = MAX_RETRIES) {
  const failure = {
    url,
    error: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    retry_count: retryCount,
  };
  runStats.failures.push(failure);
  await fs.ensureDir(FAILURES_DIR);
  const name = `${Date.now()}-${slugify(url, { lower: true, strict: true }).slice(0, 80)}.json`;
  await fs.writeJson(path.join(FAILURES_DIR, name), failure, { spaces: 2 });
}

async function saveRunStats() {
  runStats.finishedAt = new Date().toISOString();
  await fs.ensureDir(RUNS_DIR);
  const file = path.join(RUNS_DIR, `crawl-run-${runStats.startedAt.replace(/[:.]/g, '-')}.json`);
  await fs.writeJson(file, runStats, { spaces: 2 });
}

async function withRetry(fn, label) {
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, REQUEST_DELAY_MS * 2 ** (attempt - 1)));
      console.warn(`[retry ${attempt}/${MAX_RETRIES}] ${label}: ${err.message}`);
    }
  }
  throw lastErr;
}

async function downloadAssets($, pageUrl) {
  const assets = [];
  const urls = new Set();
  $('img[src], a[href]').each((_, el) => {
    const raw = $(el).attr('src') || $(el).attr('href');
    if (!raw) return;
    const absolute = new URL(raw, pageUrl);
    if (!absolute.pathname.includes('/assets/')) return;
    urls.add(absolute.toString());
  });

  for (const assetUrl of urls) {
    try {
      const parsed = new URL(assetUrl);
      const localPath = path.join(ASSET_DIR, parsed.pathname.replace(/^\//, ''));
      await fs.ensureDir(path.dirname(localPath));
      const res = await fetch(assetUrl);
      if (!res.ok) continue;
      await fs.writeFile(localPath, Buffer.from(await res.arrayBuffer()));
      assets.push({ remote: assetUrl, local: localPath });
      runStats.assetsDownloaded += 1;
    } catch {
      // ignore single asset failure
    }
  }
  return assets;
}

async function scrapeOne(page, url) {
  if (visited.has(url)) return [];
  visited.add(url);
  runStats.pagesVisited += 1;

  const response = await withRetry(async () => page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 }), `goto ${url}`);
  await page.waitForTimeout(REQUEST_DELAY_MS);

  const html = await page.content();
  const rawPath = path.join(RAW_DIR, `${slugify(new URL(url).pathname || 'index', { lower: true, strict: true })}.html`);
  await fs.ensureDir(path.dirname(rawPath));
  await fs.writeFile(rawPath, html);
  const $ = cheerio.load(html);
  const links = extractLinks($, url);
  const provider = detectProvider(html);
  const discoveredSpecs = discoverSpecUrls($, url);
  cleanDocument($);

  const title = $('h1').first().text().trim() || $('title').text().trim() || 'Untitled';
  const contentHtml = selectMainContent($);
  if (!contentHtml) throw new Error('selector_failed: no_main_content');

  const markdownBody = turndown.turndown(contentHtml).trim();
  validateMarkdown(title, markdownBody);

  const contentHash = hashContent(markdownBody);
  const prev = crawlState.get(url);
  const etag = response?.headers()?.etag || null;
  const lastModified = response?.headers()?.['last-modified'] || null;

  if (prev && prev.contentHash === contentHash) {
    crawlState.set(url, { ...prev, etag, lastModified, unchanged_at: new Date().toISOString() });
    runStats.pagesSkipped += 1;

    const schemaPath = path.join(SCHEMAS_DIR, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
    if (await fs.pathExists(schemaPath)) {
      try {
        const existing = await fs.readJson(schemaPath);
        if (existing?.normalized?.id) {
          normalizedSchemas.push(existing.normalized);
        }
      } catch (e) {}
    }
    
    return links;
  }

  const outPath = buildOutputPath(url);
  await fs.ensureDir(path.dirname(outPath));

  const kind = classifyPage(markdownBody, url);
  const frontmatter = ['---', `title: "${title.replace(/"/g, '\\"')}"`, `url: ${url}`, `kind: ${kind}`, 'category: derivatives', 'source: binance', `scraped_at: ${new Date().toISOString()}`, '---', ''].join('\n');
  const finalMarkdown = `${frontmatter}# ${title}\n\n> Source: ${url}\n\n${markdownBody}\n`;
  await fs.writeFile(outPath, finalMarkdown);

  const pageContainer = cheerio.load(contentHtml);
  const assets = await downloadAssets(pageContainer, url);
  const schema = extractApiSchema(markdownBody);
  const normalizedSchema = normalizeBinanceRestSchema(schema);
  const chunks = compileChunks(markdownBody, schema, url, title);

  let websocketSchemas = [];
  if (kind === 'websocket_stream') {
    const extractedWs = extractWebsocketSchemas(markdownBody);
    websocketSchemas = normalizeWebsocketSchema({ exchange: EXCHANGE, market: normalizedSchema.market || 'unknown', extracted: extractedWs });
    websocketSchemas = websocketSchemas.filter((ws) => validateWebsocketStateModel(ws).valid);
    const wsPath = path.join(WEBSOCKET_DIR, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
    await fs.ensureDir(path.dirname(wsPath));
    await fs.writeJson(wsPath, websocketSchemas, { spaces: 2 });
  }

  const schemaPath = path.join(SCHEMAS_DIR, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
  const chunksPath = path.join(CHUNKS_DIR, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
  await fs.ensureDir(path.dirname(schemaPath));
  await fs.ensureDir(path.dirname(chunksPath));
  await fs.writeJson(schemaPath, { raw: schema, normalized: normalizedSchema }, { spaces: 2 });
  await fs.writeJson(chunksPath, chunks, { spaces: 2 });

  if (normalizedSchema.id) normalizedSchemas.push(normalizedSchema);

  const pageSlug = slugify(new URL(url).pathname, { lower: true, strict: true });
  const specArtifacts = await ingestSpecs({ outputDir: OUTPUT_DIR, pageSlug, discovered: discoveredSpecs });

  const metadata = {
    title,
    url,
    kind,
    provider,
    output_path: path.relative(OUTPUT_DIR, outPath),
    extracted_at: new Date().toISOString(),
    assets: assets.map((a) => ({ remote: a.remote, local: path.relative(OUTPUT_DIR, a.local) })),
    schema_path: path.relative(OUTPUT_DIR, schemaPath),
    normalized_id: normalizedSchema.id,
    chunks_path: path.relative(OUTPUT_DIR, chunksPath),
    websocket_schemas: websocketSchemas.length > 0 ? websocketSchemas.length : 0,
    specs: { openapi: specArtifacts.openapi.length, asyncapi: specArtifacts.asyncapi.length },
  };

  const metadataPath = path.join(METADATA_DIR, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
  await fs.ensureDir(path.dirname(metadataPath));
  await fs.writeJson(metadataPath, metadata, { spaces: 2 });

  crawlState.set(url, { url, etag, lastModified, contentHash, outputPath: path.relative(OUTPUT_DIR, outPath), updated_at: new Date().toISOString() });
  pageResults.push({ title, url, outPath });
  runStats.pagesWritten += 1;

  return links;
}

async function writeReadme() {
  const lines = ['# Binance USDⓈ-M Futures Docs', '', `Seed: ${START_URL}`, '', '## Pages', ''];
  pageResults.sort((a, b) => a.outPath.localeCompare(b.outPath)).forEach((page) => lines.push(`- [${page.title}](./${path.relative(OUTPUT_DIR, page.outPath).replace(/\\/g, '/')})`));
  await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), `${lines.join('\n')}\n`);
}

async function run() {
  await fs.ensureDir(OUTPUT_DIR);
  await fs.ensureDir(EXCHANGE_DIR);
  await fs.ensureDir(RAW_DIR);
  await fs.ensureDir(MARKDOWN_DIR);
  await loadState();

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const pages = await Promise.all(Array.from({ length: CONCURRENCY }, () => context.newPage()));

  const queue = [normalizeUrl(START_URL)].filter(Boolean);
  enqueued.add(queue[0]);

  try {
    while (queue.length > 0) {
      const workers = pages.map(async (page) => {
        while (queue.length > 0) {
          const url = queue.shift();
          if (!url) return;
          try {
            const discovered = await scrapeOne(page, url);
            for (const link of discovered) {
              if (visited.has(link) || enqueued.has(link)) continue;
              enqueued.add(link);
              queue.push(link);
            }
          } catch (error) {
            await persistFailure(url, error);
            console.warn(`[skip] ${url}: ${error.message}`);
          }
        }
      });
      await Promise.all(workers);
    }

    if (COMBINED_README) await writeReadme();
    await buildRegistry({ outputDir: OUTPUT_DIR, normalizedRecords: normalizedSchemas });
    const compiledSummary = await compileSpecsToRuntime({ outputDir: OUTPUT_DIR, exchange: EXCHANGE, market: 'usdm_futures' });
    runStats.compiledOpenApi = compiledSummary.openapi;
    runStats.compiledAsyncApi = compiledSummary.asyncapi;
    const executionSummary = await buildExecutionRuntime({ outputDir: OUTPUT_DIR });
    runStats.runtimeRestExecutors = executionSummary.restExecutors;
    runStats.runtimeWebsocketExecutors = executionSummary.websocketRuntimes;
    await saveState();
    await saveRunStats();
    console.log(`Done. Visited=${runStats.pagesVisited} Written=${runStats.pagesWritten} Skipped=${runStats.pagesSkipped} Failures=${runStats.failures.length}`);
  } finally {
    await Promise.all(pages.map((p) => p.close()));
    await context.close();
    await browser.close();
  }
}

run().catch(async (error) => {
  await persistFailure(START_URL, error, MAX_RETRIES);
  await saveRunStats();
  console.error(error);
  process.exitCode = 1;
});
