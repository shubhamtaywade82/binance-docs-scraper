const fs = require('fs-extra');
const path = require('path');

async function fetchJsonOrText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`spec_fetch_failed: ${url}`);
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return { format: 'json', body: await res.json() };
  return { format: 'text', body: await res.text() };
}

/** Ingest discovered OpenAPI/AsyncAPI specs for semantic-first compilation. */
async function ingestSpecs({ outputDir, pageSlug, discovered }) {
  const outDir = path.join(outputDir, '_specs');
  const openapiDir = path.join(outDir, 'openapi');
  const asyncapiDir = path.join(outDir, 'asyncapi');
  await fs.ensureDir(openapiDir);
  await fs.ensureDir(asyncapiDir);
  const result = { openapi: [], asyncapi: [] };

  for (const url of discovered.openapi || []) {
    try {
      const payload = await fetchJsonOrText(url);
      const file = path.join(openapiDir, `${pageSlug}-openapi-${result.openapi.length + 1}.json`);
      await fs.writeJson(file, { url, ...payload }, { spaces: 2 });
      result.openapi.push(file);
    } catch {}
  }

  for (const url of discovered.asyncapi || []) {
    try {
      const payload = await fetchJsonOrText(url);
      const file = path.join(asyncapiDir, `${pageSlug}-asyncapi-${result.asyncapi.length + 1}.json`);
      await fs.writeJson(file, { url, ...payload }, { spaces: 2 });
      result.asyncapi.push(file);
    } catch {}
  }

  return result;
}

module.exports = { ingestSpecs };
