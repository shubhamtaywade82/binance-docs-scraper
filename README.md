# binance-docs-scraper

Deterministic Binance docs synchronization + semantic extraction pipeline for USDⓈ-M Futures pages.

## Features
- Canonical URL normalization and queue-based bounded-concurrency crawling.
- Stateful incremental sync with persisted hash/etag/last-modified crawl state.
- Reusable Playwright page workers (pool) for lower churn.
- Aggressive DOM sanitization + deterministic content extraction.
- GFM markdown output with code-fence language preservation + frontmatter.
- Semantic outputs: page classification, raw+normalized API schema JSON, chunk JSON.
- Semantic registry compiler for endpoint/capability/relationship graph outputs.
- Asset mirroring, failure persistence, and crawl-run observability manifests.

## Output
- `docs/**/*.md` — normalized markdown pages
- `docs/_metadata/*.json` — per-page metadata
- `docs/_schemas/*.json` — raw + normalized endpoint schemas
- `docs/_chunks/*.json` — semantic chunks for embedding/retrieval
- `docs/_registry/endpoints/*.json` — exchange semantic registry nodes
- `docs/_registry/relationships/graph.json` — endpoint relationship graph
- `docs/_crawl_state.json` — incremental sync state
- `docs/_runs/crawl-run-*.json` — crawl observability summaries
- `docs/_failures/*.json` — persistent failure records
