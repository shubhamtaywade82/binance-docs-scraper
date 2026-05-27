const { chromium } = require('playwright');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const fs = require('fs-extra');
const path = require('path');
const slugify = require('slugify');
const pLimit = require('p-limit');

const BASE_URL = 'https://developers.binance.com';
const START_URL = process.env.START_URL || 'https://developers.binance.com/docs/derivatives/change-log';
const ALLOWED_PATH_PREFIX = process.env.ALLOWED_PATH_PREFIX || '/docs/derivatives';
const OUTPUT_DIR = path.resolve(process.env.OUTPUT_DIR || 'docs');
const COMBINED_README = (process.env.COMBINED_README || 'true').toLowerCase() === 'true';
const MAX_RETRIES = Number(process.env.MAX_RETRIES || 3);
const REQUEST_DELAY_MS = Number(process.env.REQUEST_DELAY_MS || 750);
const CONCURRENCY = Number(process.env.CONCURRENCY || 2);

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

const visited = new Set();
const enqueued = new Set();
const pageResults = [];

const limit = pLimit(CONCURRENCY);

/**
 * Return an absolute URL if the link is a crawlable docs page.
 */
function normalizeDocsUrl(href) {
  if (!href) return null;
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('mailto:') || trimmed.startsWith('javascript:')) {
    return null;
  }

  const candidate = new URL(trimmed, BASE_URL);
  if (candidate.origin !== BASE_URL) return null;
  if (!candidate.pathname.startsWith(ALLOWED_PATH_PREFIX)) return null;

  candidate.hash = '';
  return candidate.toString();
}

function pathForPage(url, title) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname
    .replace(ALLOWED_PATH_PREFIX, '')
    .split('/')
    .filter(Boolean);

  const fileSlug = slugify(pathParts[pathParts.length - 1] || title || 'index', { lower: true, strict: true }) || 'index';
  const parentDirs = pathParts.slice(0, -1).map((part) => slugify(part, { lower: true, strict: true }));
  return path.join(OUTPUT_DIR, ...parentDirs, `${fileSlug}.md`);
}

function cleanContent($) {
  $('.pagination-nav, nav, .theme-doc-footer, .table-of-contents, script, style').remove();
  return (
    $('main article').first().html() ||
    $('main').first().html() ||
    $('.theme-doc-markdown').first().html() ||
    $('article').first().html() ||
    ''
  );
}

function extractLinks($, currentUrl) {
  const links = new Set();

  $('.menu__link, a').each((_, el) => {
    const href = $(el).attr('href');
    const absolute = normalizeDocsUrl(href);
    if (absolute) links.add(absolute);
  });

  const nextHref = $('a[rel="next"], .pagination-nav__link--next').first().attr('href');
  const nextAbsolute = normalizeDocsUrl(nextHref);
  if (nextAbsolute) links.add(nextAbsolute);

  links.delete(currentUrl);
  return [...links];
}

async function withRetry(fn, label) {
  let lastErr;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const backoff = REQUEST_DELAY_MS * 2 ** (attempt - 1);
      console.warn(`[retry ${attempt}/${MAX_RETRIES}] ${label}: ${err.message}`);
      await new Promise((resolve) => setTimeout(resolve, backoff));
    }
  }
  throw lastErr;
}

async function scrapeOne(browser, url) {
  if (visited.has(url)) return [];
  visited.add(url);

  const page = await browser.newPage();
  try {
    console.log(`Scraping ${url}`);
    await withRetry(
      async () =>
        page.goto(url, {
          waitUntil: 'networkidle',
          timeout: 60_000,
        }),
      `goto ${url}`,
    );

    await page.waitForTimeout(REQUEST_DELAY_MS);
    const html = await page.content();
    const $ = cheerio.load(html);

    const title = $('h1').first().text().trim() || $('title').text().trim() || 'Untitled';
    const bodyHtml = cleanContent($);

    if (!bodyHtml) {
      console.warn(`No content found for ${url}`);
      return extractLinks($, url);
    }

    const markdownBody = turndown.turndown(bodyHtml).trim();
    const outPath = pathForPage(url, title);
    await fs.ensureDir(path.dirname(outPath));

    const pageMarkdown = [`# ${title}`, '', `> Source: ${url}`, '', markdownBody, ''].join('\n');
    await fs.writeFile(outPath, pageMarkdown);

    pageResults.push({ title, url, outPath });
    return extractLinks($, url);
  } finally {
    await page.close();
  }
}

async function writeReadme() {
  const rel = (p) => `./${path.relative(OUTPUT_DIR, p).replace(/\\/g, '/')}`;
  const lines = ['# Binance USDⓈ-M Futures Docs', '', `Seed: ${START_URL}`, '', '## Pages', ''];

  pageResults
    .sort((a, b) => a.outPath.localeCompare(b.outPath))
    .forEach((page) => lines.push(`- [${page.title}](${rel(page.outPath)})`));

  lines.push('');
  await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), lines.join('\n'));
}

async function run() {
  await fs.ensureDir(OUTPUT_DIR);

  const browser = await chromium.launch({ headless: true });
  const queue = [START_URL];
  enqueued.add(START_URL);

  try {
    while (queue.length > 0) {
      const batch = queue.splice(0, CONCURRENCY);
      const discoveredList = await Promise.all(batch.map((url) => limit(() => scrapeOne(browser, url))));

      for (const discovered of discoveredList.flat()) {
        if (!enqueued.has(discovered) && !visited.has(discovered)) {
          enqueued.add(discovered);
          queue.push(discovered);
        }
      }
    }

    if (COMBINED_README) {
      await writeReadme();
    }

    console.log(`Done. Scraped ${visited.size} pages. Output => ${OUTPUT_DIR}`);
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
