# binance-docs-scraper

Deterministic Binance docs ingestion pipeline for USDⓈ-M Futures pages.

## Features
- Canonical URL normalization (drops query/hash, trims trailing slash).
- Queue-based crawl with loop prevention.
- Hybrid link discovery (sidebar `.menu__link` + filtered `a[href]`).
- Aggressive DOM sanitization before markdown conversion.
- GFM markdown conversion with code-fence language preservation.
- Frontmatter in every markdown page for downstream RAG filters.
- URL hierarchy-preserving output path (`docs/derivatives/.../*.md`).
- Asset downloading into `docs/_assets` and metadata sidecars in `docs/_metadata`.

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
