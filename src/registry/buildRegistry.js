const fs = require('fs-extra');
const path = require('path');

/** Build semantic registry files from normalized schemas. */
async function buildRegistry({ outputDir, normalizedRecords }) {
  const registryDir = path.join(outputDir, '_registry');
  const endpointsDir = path.join(registryDir, 'endpoints');
  const relationshipsDir = path.join(registryDir, 'relationships');
  await fs.ensureDir(endpointsDir);
  await fs.ensureDir(relationshipsDir);

  const endpointIds = new Set(
    normalizedRecords.filter((r) => r.transport === 'rest' && r.id).map((r) => r.id),
  );

  const relationships = [];

  for (const record of normalizedRecords) {
    if (!record.id) continue;
    const endpointPath = (record.path || '').toLowerCase();
    const related = [...endpointIds].filter((id) => id !== record.id && (id.includes('order') && endpointPath.includes('order')));

    const node = {
      ...record,
      capabilities: {
        supportsReduceOnly: /reduceonly/i.test(JSON.stringify(record.parameters || [])),
        supportsTrailingStop: /trailing/i.test(JSON.stringify(record.parameters || [])),
        supportsHedgeMode: /positionSide|hedge/i.test(JSON.stringify(record.parameters || [])),
      },
      related,
    };

    await fs.writeJson(path.join(endpointsDir, `${record.id}.json`), node, { spaces: 2 });
    relationships.push({ id: record.id, related });
  }

  await fs.writeJson(path.join(relationshipsDir, 'graph.json'), { relationships }, { spaces: 2 });
}

module.exports = { buildRegistry };
