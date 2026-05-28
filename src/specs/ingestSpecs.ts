import fs from 'fs-extra';
import path from 'path';
import yaml from 'js-yaml';

async function fetchJsonOrText(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`spec_fetch_failed: ${url}`);
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return { format: 'json', body: await res.json() };

  const text = await res.text();
  if (contentType.includes('yaml') || url.endsWith('.yaml') || url.endsWith('.yml')) {
    try {
      return { format: 'json', body: yaml.load(text) };
    } catch (e) {
      console.error(e);
    }
  }
  return { format: 'text', body: text };
}

/** Ingest discovered OpenAPI/AsyncAPI specs for semantic-first compilation. */
async function ingestSpecs({
  outputDir,
  pageSlug,
  discovered,
}: {
  outputDir: string;
  pageSlug: string;
  discovered: { openapi?: string[]; asyncapi?: string[] };
}) {
  const outDir = path.join(outputDir, '_specs');
  const openapiDir = path.join(outDir, 'openapi');
  const asyncapiDir = path.join(outDir, 'asyncapi');
  await fs.ensureDir(openapiDir);
  await fs.ensureDir(asyncapiDir);
  const result: { openapi: string[]; asyncapi: string[] } = { openapi: [], asyncapi: [] };

  for (const url of discovered.openapi || []) {
    try {
      const payload = await fetchJsonOrText(url);
      const file = path.join(openapiDir, `${pageSlug}-openapi-${result.openapi.length + 1}.json`);
      await fs.writeJson(file, { url, ...payload }, { spaces: 2 });
      result.openapi.push(file);
    } catch (e) {
      console.error(e);
    }
  }

  for (const url of discovered.asyncapi || []) {
    try {
      const payload = await fetchJsonOrText(url);
      const file = path.join(asyncapiDir, `${pageSlug}-asyncapi-${result.asyncapi.length + 1}.json`);
      await fs.writeJson(file, { url, ...payload }, { spaces: 2 });
      result.asyncapi.push(file);
    } catch (e) {
      console.error(e);
    }
  }

  return result;
}

export { ingestSpecs };
