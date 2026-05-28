# Changelog

## 2026-05-27
- Add incremental crawl state (`docs/_crawl_state.json`) using content SHA-256, ETag, and Last-Modified to skip unchanged pages.
- Add content quality validation and reusable Playwright page worker pool.
- Add semantic extraction outputs (`docs/_schemas`, `docs/_chunks`) and page kind classification.
- Add crawl observability manifests (`docs/_runs/crawl-run-*.json`) and persistent failure logs (`docs/_failures/*.json`).
- Add schema normalizer layer and semantic registry compiler (`docs/_registry`) for normalized endpoint models, inferred capabilities, and relationship graph output.
- Add runtime safety foundations: order constraint validator, registry integrity validator, semantic diff generator, and semantic endpoint query helper.

- Add typed parameter normalization, execution policy validator, and deterministic tool schema generator for runtime-safe endpoint execution.

- Add exchange adapter plugin system (`binance`, `dhanhq`, `coindcx`) with core adapter selection and shared discovery/normalization contract.

- Add websocket semantic extraction/normalization/validation pipeline with state synchronization semantics output (`docs/_websocket/*.json`).

- Add provider detection (Swagger/Redoc/Docusaurus/Mintlify/GitBook/custom) and spec-first ingestion discovery for OpenAPI/AsyncAPI with persisted `_specs` artifacts.

- Add spec runtime compiler to transform discovered OpenAPI/AsyncAPI artifacts into compiled executable REST/WS runtime types under `docs/_compiled`.

- Split documentation into high-level `README.md` and operational `USAGE.md` to keep platform architecture and workflows clearly separated.
