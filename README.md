# binance-docs-scraper

Deterministic Binance docs synchronization + semantic extraction pipeline for USDⓈ-M Futures pages.

## Features
- Canonical URL normalization and queue-based bounded-concurrency crawling.
- Stateful incremental sync with persisted hash/etag/last-modified crawl state.
- Reusable Playwright page workers (pool) for lower churn.
- Aggressive DOM sanitization + deterministic content extraction.
- GFM markdown output with code-fence language preservation + frontmatter.
- Semantic outputs: page classification, API schema JSON, chunk JSON.
- Asset mirroring, failure persistence, and crawl-run observability manifests.

## Output
- `docs/**/*.md` — normalized markdown pages
- `docs/_metadata/*.json` — per-page metadata
- `docs/_schemas/*.json` — structured endpoint schemas
- `docs/_chunks/*.json` — semantic chunks for embedding/retrieval
- `docs/_crawl_state.json` — incremental sync state
- `docs/_runs/crawl-run-*.json` — crawl observability summaries
- `docs/_failures/*.json` — persistent failure records

## Install
```bash
npm install
npx playwright install chromium
```

## Usage
```bash
npm run scrape
```

## Environment
Copy `.env.example` and customize:
- `START_URL`
- `ALLOWED_PATH_PREFIX`
- `OUTPUT_DIR`
- `COMBINED_README`
- `MAX_RETRIES`
- `REQUEST_DELAY_MS`
- `CONCURRENCY`
- `MIN_MARKDOWN_LENGTH`
