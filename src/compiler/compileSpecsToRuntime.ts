import fs from 'fs-extra';
import path from 'path';
import {  compileOpenApi  } from '../specs/compilers/compileOpenApi.js';
import {  compileAsyncApi  } from '../specs/compilers/compileAsyncApi.js';

async function compileSpecsToRuntime({ outputDir, exchange, market = 'unknown' }: { outputDir: string, exchange: string, market?: string }) {
  const specsDir = path.join(outputDir, '_specs');
  const outDir = path.join(outputDir, '_compiled');
  await fs.ensureDir(outDir);
  if (!(await fs.pathExists(specsDir))) return { openapi: 0, asyncapi: 0 };

  const files: string[] = [];
  for (const sub of ['openapi', 'asyncapi']) {
    const dir = path.join(specsDir, sub);
    if (!(await fs.pathExists(dir))) continue;
    const entries = (await fs.readdir(dir)).filter((f) => f.endsWith('.json')).map((f) => path.join(sub, f));
    files.push(...entries);
  }
  let openapiCount = 0;
  let asyncapiCount = 0;

  for (const file of files) {
    const full = path.join(specsDir, file);
    const blob = await fs.readJson(full);
    if (blob.url?.toLowerCase().includes('asyncapi')) {
      const compiled = compileAsyncApi({ exchange, market, doc: blob.body });
      await fs.writeJson(path.join(outDir, `${file.replace(/[\/]/g, '-').replace('.json', '')}-compiled-ws.json`), compiled, { spaces: 2 });
      asyncapiCount += compiled.length;
    } else {
      const doc = typeof blob.body === 'object' ? blob.body : null;
      const compiled = compileOpenApi({ exchange, market, doc });
      await fs.writeJson(path.join(outDir, `${file.replace(/[\/]/g, '-').replace('.json', '')}-compiled-rest.json`), compiled, { spaces: 2 });
      openapiCount += compiled.length;
    }
  }

  return { openapi: openapiCount, asyncapi: asyncapiCount };
}

export {  compileSpecsToRuntime  };
