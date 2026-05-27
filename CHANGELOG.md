# Changelog

## 2026-05-27
- Improve scraper into ingestion-friendly pipeline with stronger sanitization, canonical URL normalization, GFM markdown conversion, frontmatter, asset download, and metadata sidecar JSON.

- Add incremental crawl state (`docs/_crawl_state.json`) using content SHA-256, ETag, and Last-Modified to skip unchanged pages; add content-quality validation and reusable Playwright page workers.
