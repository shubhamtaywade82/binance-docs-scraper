const { chromium } = require('playwright');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');
const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
const slugify = require('slugify');

const BASE_URL = 'https://developers.binance.com';
const START_URL = process.env.START_URL || 'https://developers.binance.com/docs/derivatives/change-log';
const ALLOWED_PATH_PREFIX = process.env.ALLOWED_PATH_PREFIX || '/docs/derivatives';
const OUTPUT_DIR = path.resolve(process.env.OUTPUT_DIR || 'docs');
const ASSET_DIR = path.join(OUTPUT_DIR, '_assets');
const METADATA_DIR = path.join(OUTPUT_DIR, '_metadata');
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

function normalizeUrl(raw) {
  const url = new URL(raw, BASE_URL);
  if (url.origin !== BASE_URL || !url.pathname.startsWith(ALLOWED_PATH_PREFIX)) return null;
  url.hash = '';
  url.search = '';
  return url.toString().replace(/\/$/, '');
}

function buildOutputPath(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname.replace(/^\/docs\//, '');
  if (pathname.endsWith('/')) pathname += 'index';
  return path.join(OUTPUT_DIR, `${pathname}.md`);
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
  const links = new Set();
  $('.menu__link, a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const normalized = normalizeUrl(href);
    if (normalized) links.add(normalized);
  });
  links.delete(currentUrl);
  return [...links];
}

function extractApiMetadata(markdown) {
  const endpoint = markdown.match(/\/(fapi|dapi)\/v1\/[\w/-]+/)?.[0] || null;
  const method = markdown.match(/\b(GET|POST|PUT|DELETE|PATCH)\b/)?.[1] || null;
  const weight = Number(markdown.match(/Request Weight\s*:?\s*(\d+)/i)?.[1] || NaN);
  const security = markdown.match(/\b(TRADE|USER_DATA|USER_STREAM|MARKET_DATA)\b/i)?.[1] || null;
  return { endpoint, method, weight: Number.isFinite(weight) ? weight : null, security };
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
    } catch {
      // ignore single asset failure
    }
  }
  return assets;
}

async function scrapeOne(page, url) {
  if (visited.has(url)) return [];
  visited.add(url);

  const response = await withRetry(async () => page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 }), `goto ${url}`);
  await page.waitForTimeout(REQUEST_DELAY_MS);

  const html = await page.content();
  const $ = cheerio.load(html);
  const links = extractLinks($, url);
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
    return links;
  }

  const outPath = buildOutputPath(url);
  await fs.ensureDir(path.dirname(outPath));

  const frontmatter = ['---', `title: "${title.replace(/"/g, '\\"')}"`, `url: ${url}`, 'category: derivatives', 'source: binance', `scraped_at: ${new Date().toISOString()}`, '---', ''].join('\n');
  const finalMarkdown = `${frontmatter}# ${title}\n\n> Source: ${url}\n\n${markdownBody}\n`;
  await fs.writeFile(outPath, finalMarkdown);

  const pageContainer = cheerio.load(contentHtml);
  const assets = await downloadAssets(pageContainer, url);

  const metadata = {
    title,
    url,
    output_path: path.relative(OUTPUT_DIR, outPath),
    extracted_at: new Date().toISOString(),
    assets: assets.map((a) => ({ remote: a.remote, local: path.relative(OUTPUT_DIR, a.local) })),
    api: extractApiMetadata(markdownBody),
  };
  const metadataPath = path.join(METADATA_DIR, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
  await fs.ensureDir(path.dirname(metadataPath));
  await fs.writeJson(metadataPath, metadata, { spaces: 2 });

  crawlState.set(url, { url, etag, lastModified, contentHash, outputPath: path.relative(OUTPUT_DIR, outPath), updated_at: new Date().toISOString() });
  pageResults.push({ title, url, outPath });

  return links;
}

async function writeReadme() {
  const lines = ['# Binance USDⓈ-M Futures Docs', '', `Seed: ${START_URL}`, '', '## Pages', ''];
  pageResults.sort((a, b) => a.outPath.localeCompare(b.outPath)).forEach((page) => lines.push(`- [${page.title}](./${path.relative(OUTPUT_DIR, page.outPath).replace(/\\/g, '/')})`));
  await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), `${lines.join('\n')}\n`);
}

async function run() {
  await fs.ensureDir(OUTPUT_DIR);
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
            console.warn(`[skip] ${url}: ${error.message}`);
          }
        }
      });
      await Promise.all(workers);
    }

    if (COMBINED_README) await writeReadme();
    await saveState();
    console.log(`Done. Scraped ${visited.size} pages -> ${OUTPUT_DIR}`);
  } finally {
    await Promise.all(pages.map((p) => p.close()));
    await context.close();
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
