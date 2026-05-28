const fs = require('fs-extra');
const path = require('path');
const { compileRestExecutor } = require('../compiler/compileRestExecutor');
const { compileWebsocketRuntime } = require('../compiler/compileWebsocketRuntime');

/** Build executable runtime artifacts from compiled REST/WS semantics. */
async function buildExecutionRuntime({ outputDir }) {
  const compiledDir = path.join(outputDir, '_compiled');
  const websocketDir = path.join(outputDir, '_websocket');
  const runtimeDir = path.join(outputDir, '_execution_runtime');
  await fs.ensureDir(runtimeDir);

  const restExecutors = [];
  const websocketRuntimes = [];

  if (await fs.pathExists(compiledDir)) {
    const files = (await fs.readdir(compiledDir)).filter((f) => f.endsWith('-compiled-rest.json'));
    for (const file of files) {
      const endpoints = await fs.readJson(path.join(compiledDir, file));
      (endpoints || []).forEach((endpoint) => restExecutors.push(compileRestExecutor(endpoint)));
    }

    const wsFiles = (await fs.readdir(compiledDir)).filter((f) => f.endsWith('-compiled-ws.json'));
    for (const file of wsFiles) {
      const schemas = await fs.readJson(path.join(compiledDir, file));
      (schemas || []).forEach((schema) => websocketRuntimes.push(compileWebsocketRuntime(schema)));
    }
  }

  if (await fs.pathExists(websocketDir)) {
    const files = (await fs.readdir(websocketDir)).filter((f) => f.endsWith('.json'));
    for (const file of files) {
      const schemas = await fs.readJson(path.join(websocketDir, file));
      (schemas || []).forEach((schema) => websocketRuntimes.push(compileWebsocketRuntime(schema)));
    }
  }

  await fs.writeJson(path.join(runtimeDir, 'rest-executors.json'), restExecutors, { spaces: 2 });
  await fs.writeJson(path.join(runtimeDir, 'websocket-runtimes.json'), websocketRuntimes, { spaces: 2 });

  return { restExecutors: restExecutors.length, websocketRuntimes: websocketRuntimes.length };
}

module.exports = { buildExecutionRuntime };
