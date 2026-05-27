const { chromium } = require('playwright');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');
const fs = require('fs-extra');
const path = require('path');
const slugify = require('slugify');
const pLimit = require('p-limit');

const BASE_URL = 'https://developers.binance.com';
const START_URL = process.env.START_URL || 'https://developers.binance.com/docs/derivatives/change-log';
const ALLOWED_PATH_PREFIX = process.env.ALLOWED_PATH_PREFIX || '/docs/derivatives';
const OUTPUT_DIR = path.resolve(process.env.OUTPUT_DIR || 'docs');
const ASSET_DIR = path.join(OUTPUT_DIR, '_assets');
const METADATA_DIR = path.join(OUTPUT_DIR, '_metadata');
const COMBINED_README = (process.env.COMBINED_README || 'true').toLowerCase() === 'true';
const MAX_RETRIES = Number(process.env.MAX_RETRIES || 3);
const REQUEST_DELAY_MS = Number(process.env.REQUEST_DELAY_MS || 750);
const CONCURRENCY = Number(process.env.CONCURRENCY || 2);

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
turndown.use(gfm);
turndown.addRule('fencedCodeWithLanguage', {
  filter: (node) => node.nodeName === 'PRE' && node.firstChild && node.firstChild.nodeName === 'CODE',
  replacement: (content, node) => {
    const className = node.firstChild.getAttribute('class') || '';
    const lang = (className.match(/language-([\w-]+)/) || [])[1] || '';
    const code = node.firstChild.textContent || '';
    return `\n\n\`\`\`${lang}\n${code.replace(/\n$/, '')}\n\`\`\`\n\n`;
  },
});

const visited = new Set();
const enqueued = new Set();
const pageResults = [];
const limit = pLimit(CONCURRENCY);

function normalizeUrl(raw) {
  const url = new URL(raw, BASE_URL);
  if (url.origin !== BASE_URL) return null;
  if (!url.pathname.startsWith(ALLOWED_PATH_PREFIX)) return null;
  url.hash = '';
  url.search = '';
  let normalized = url.toString();
  if (normalized.endsWith('/')) normalized = normalized.slice(0, -1);
  return normalized;
}

function buildOutputPath(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname.replace(/^\/docs\//, '');
  if (pathname.endsWith('/')) pathname += 'index';
  return path.join(OUTPUT_DIR, `${pathname}.md`);
}

function cleanDocument($) {
  const selectorsToRemove = [
    'nav', 'header', 'footer', 'script', 'style', '.navbar', '.pagination-nav', '.theme-doc-footer',
    '.table-of-contents', '.breadcrumbs', '.menu', '.theme-edit-this-page', '.clean-btn', '.hash-link',
    '.DocSearch', '.mobile-nav', '.theme-back-to-top-button'
  ];
  selectorsToRemove.forEach((selector) => $(selector).remove());
}

function selectMainContent($) {
  const selectors = ['article', 'main article', '.theme-doc-markdown', 'main'];
  let best = '';
  for (const selector of selectors) {
    const html = $(selector).first().html() || '';
    const textLen = $(selector).first().text().trim().length;
    if (textLen > 200 && html.length > best.length) best = html;
  }
  return best;
}

async function downloadAssets($, pageUrl) {
  const assets = [];
  const urls = new Set();
  $('img[src], a[href]').each((_, el) => {
    const attr = $(el).attr('src') ? 'src' : 'href';
    const raw = $(el).attr(attr);
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
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(localPath, buf);
      assets.push({ remote: assetUrl, local: localPath });
    } catch {
      // ignore single asset failure
    }
  }

  return assets;
}

function extractLinks($, currentUrl) {
  const links = new Set();
  $('.menu__link').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const normalized = normalizeUrl(href);
    if (normalized) links.add(normalized);
  });

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const normalized = normalizeUrl(href);
    if (normalized) links.add(normalized);
  });

  links.delete(currentUrl);
  return [...links];
}

function extractApiMetadata(markdown) {
  const endpointMatch = markdown.match(/\/(fapi|dapi)\/v1\/[\w/-]+/);
  const methodMatch = markdown.match(/\b(GET|POST|PUT|DELETE|PATCH)\b/);
  const weightMatch = markdown.match(/Request Weight\s*:?\s*(\d+)/i);
  const permissionMatch = markdown.match(/\b(TRADE|USER_DATA|USER_STREAM|MARKET_DATA)\b/i);

  return {
    endpoint: endpointMatch ? endpointMatch[0] : null,
    method: methodMatch ? methodMatch[1] : null,
    weight: weightMatch ? Number(weightMatch[1]) : null,
    security: permissionMatch ? permissionMatch[1] : null,
  };
}

async function withRetry(fn, label) {
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY_MS * 2 ** (attempt - 1)));
      console.warn(`[retry ${attempt}/${MAX_RETRIES}] ${label}: ${err.message}`);
    }
  }
  throw lastErr;
}

async function scrapeOne(browser, url) {
  if (visited.has(url)) return [];
  visited.add(url);

  const page = await browser.newPage();
  try {
    await withRetry(async () => page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 }), `goto ${url}`);
    await page.waitForTimeout(REQUEST_DELAY_MS);

    const html = await page.content();
    const $ = cheerio.load(html);
    cleanDocument($);

    const title = $('h1').first().text().trim() || $('title').text().trim() || 'Untitled';
    const contentHtml = selectMainContent($);
    if (!contentHtml) return extractLinks($, url);

    const pageContainer = cheerio.load(contentHtml);
    const assets = await downloadAssets(pageContainer, url);
    const markdownBody = turndown.turndown(contentHtml).trim();

    const frontmatter = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `url: ${url}`,
      'category: derivatives',
      'source: binance',
      `scraped_at: ${new Date().toISOString()}`,
      '---',
      '',
    ].join('\n');

    const finalMarkdown = `${frontmatter}# ${title}\n\n> Source: ${url}\n\n${markdownBody}\n`;
    const outPath = buildOutputPath(url);
    await fs.ensureDir(path.dirname(outPath));
    await fs.writeFile(outPath, finalMarkdown);

    const metadata = {
      title,
      url,
      output_path: path.relative(OUTPUT_DIR, outPath),
      assets: assets.map((a) => ({ remote: a.remote, local: path.relative(OUTPUT_DIR, a.local) })),
      extracted_at: new Date().toISOString(),
      api: extractApiMetadata(markdownBody),
    };
    const metadataPath = path.join(METADATA_DIR, `${slugify(new URL(url).pathname, { lower: true, strict: true })}.json`);
    await fs.ensureDir(path.dirname(metadataPath));
    await fs.writeJson(metadataPath, metadata, { spaces: 2 });

    pageResults.push({ title, url, outPath });
    return extractLinks($, url);
  } finally {
    await page.close();
  }
}

async function writeReadme() {
  const lines = ['# Binance USDⓈ-M Futures Docs', '', `Seed: ${START_URL}`, '', '## Pages', ''];
  pageResults.sort((a, b) => a.outPath.localeCompare(b.outPath)).forEach((page) => {
    lines.push(`- [${page.title}](./${path.relative(OUTPUT_DIR, page.outPath).replace(/\\/g, '/')})`);
  });
  lines.push('');
  await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), lines.join('\n'));
}

async function run() {
  await fs.ensureDir(OUTPUT_DIR);
  const browser = await chromium.launch({ headless: true });
  const queue = [normalizeUrl(START_URL)];
  enqueued.add(queue[0]);

  try {
    while (queue.length > 0) {
      const batch = queue.splice(0, CONCURRENCY);
      const discoveredBatch = await Promise.all(batch.map((url) => limit(() => scrapeOne(browser, url))));
      for (const discovered of discoveredBatch.flat()) {
        if (!discovered || visited.has(discovered) || enqueued.has(discovered)) continue;
        enqueued.add(discovered);
        queue.push(discovered);
      }
    }

    if (COMBINED_README) await writeReadme();
    console.log(`Done. Scraped ${visited.size} pages -> ${OUTPUT_DIR}`);
  } finally {
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
