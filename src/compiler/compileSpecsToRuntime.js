const fs = require('fs-extra');
const path = require('path');
const { compileOpenApi } = require('../specs/compilers/compileOpenApi');
const { compileAsyncApi } = require('../specs/compilers/compileAsyncApi');

async function compileSpecsToRuntime({ outputDir, exchange, market = 'unknown' }) {
  const specsDir = path.join(outputDir, '_specs');
  const outDir = path.join(outputDir, '_compiled');
  await fs.ensureDir(outDir);
  if (!(await fs.pathExists(specsDir))) return { openapi: 0, asyncapi: 0 };

  const files = (await fs.readdir(specsDir)).filter((f) => f.endsWith('.json'));
  let openapiCount = 0;
  let asyncapiCount = 0;

  for (const file of files) {
    const full = path.join(specsDir, file);
    const blob = await fs.readJson(full);
    if (blob.url?.toLowerCase().includes('asyncapi')) {
      const compiled = compileAsyncApi({ exchange, market, doc: blob.body });
      await fs.writeJson(path.join(outDir, `${file.replace('.json', '')}-compiled-ws.json`), compiled, { spaces: 2 });
      asyncapiCount += compiled.length;
    } else {
      const doc = typeof blob.body === 'object' ? blob.body : null;
      const compiled = compileOpenApi({ exchange, market, doc });
      await fs.writeJson(path.join(outDir, `${file.replace('.json', '')}-compiled-rest.json`), compiled, { spaces: 2 });
      openapiCount += compiled.length;
    }
  }

  return { openapi: openapiCount, asyncapi: asyncapiCount };
}

module.exports = { compileSpecsToRuntime };
