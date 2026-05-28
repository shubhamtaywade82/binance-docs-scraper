const fs = require('fs-extra');
const path = require('path');
const { validateRegistry } = require('../runtime/validators/validateRegistry');
const { diffSchemas } = require('../runtime/diffs/diffSchemas');

/** Build semantic registry files from normalized schemas. */
async function buildRegistry({ outputDir, normalizedRecords }) {
  const registryDir = path.join(outputDir, '_registry');
  const endpointsDir = path.join(registryDir, 'endpoints');
  const relationshipsDir = path.join(registryDir, 'relationships');
  const diffsDir = path.join(registryDir, 'diffs');
  await fs.ensureDir(endpointsDir);
  await fs.ensureDir(relationshipsDir);
  await fs.ensureDir(diffsDir);

  const endpointIds = new Set(
    normalizedRecords.filter((r) => r.transport === 'rest' && r.id).map((r) => r.id),
  );

  const relationships = [];

  for (const record of normalizedRecords) {
    if (!record.id) continue;
    const endpointPath = (record.path || '').toLowerCase();
    const related = [...endpointIds].filter((id) => id !== record.id && (id.includes('order') && endpointPath.includes('order')));

    const endpointFile = path.join(endpointsDir, `${record.id}.json`);
    const previousNode = await fs.pathExists(endpointFile) ? await fs.readJson(endpointFile) : null;

    const node = {
      ...record,
      capabilities: {
        supportsReduceOnly: /reduceonly/i.test(JSON.stringify(record.parameters || [])),
        supportsTrailingStop: /trailing/i.test(JSON.stringify(record.parameters || [])),
        supportsHedgeMode: /positionSide|hedge/i.test(JSON.stringify(record.parameters || [])),
      },
      related,
    };

    await fs.writeJson(endpointFile, node, { spaces: 2 });
    const diff = diffSchemas(previousNode, node);
    if ((diff.changes || []).length > 0) {
      await fs.writeJson(path.join(diffsDir, `${record.id}.json`), { id: record.id, changes: diff.changes }, { spaces: 2 });
    }
    relationships.push({ id: record.id, related });
  }

  const graph = { relationships };
  await fs.writeJson(path.join(relationshipsDir, 'graph.json'), graph, { spaces: 2 });

  const integrity = validateRegistry(normalizedRecords, graph);
  await fs.writeJson(path.join(registryDir, 'integrity.json'), integrity, { spaces: 2 });
}


module.exports = { buildRegistry };
