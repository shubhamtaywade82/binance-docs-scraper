# binance-docs-scraper

Recursive scraper for Binance USDⓈ-M Futures docs that renders pages with Playwright, extracts content with Cheerio, converts to Markdown with Turndown, and writes one `.md` file per page while preserving hierarchy.

## Features

- Starts from a seed URL.
- Extracts title, content, and links (sidebar + next navigation).
- Converts HTML to clean Markdown.
- Saves one Markdown file per page under a folder hierarchy derived from URL paths.
- Prevents loops with visited/enqueued sets.
- Adds request delay and retry with exponential backoff.
- Optionally generates a combined `docs/README.md` index.

## Install

```bash
npm install
npx playwright install chromium
```

## Usage

```bash
npm run scrape
```

Optional environment variables:

- `START_URL` (default: `https://developers.binance.com/docs/derivatives/change-log`)
- `ALLOWED_PATH_PREFIX` (default: `/docs/derivatives`)
- `OUTPUT_DIR` (default: `docs`)
- `COMBINED_README` (default: `true`)
- `MAX_RETRIES` (default: `3`)
- `REQUEST_DELAY_MS` (default: `750`)
- `CONCURRENCY` (default: `2`)
