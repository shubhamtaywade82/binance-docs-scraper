# Changelog

## 2026-05-27
- Add incremental crawl state (`docs/_crawl_state.json`) using content SHA-256, ETag, and Last-Modified to skip unchanged pages.
- Add content quality validation and reusable Playwright page worker pool.
- Add semantic extraction outputs (`docs/_schemas`, `docs/_chunks`) and page kind classification.
- Add crawl observability manifests (`docs/_runs/crawl-run-*.json`) and persistent failure logs (`docs/_failures/*.json`).
