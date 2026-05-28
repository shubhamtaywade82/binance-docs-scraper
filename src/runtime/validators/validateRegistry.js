/** Validate semantic registry graph integrity. */
function validateRegistry(nodes, graph) {
  const errors = [];
  const ids = new Set();

  nodes.forEach((node) => {
    if (!node.id) errors.push({ type: 'missing_id', node });
    if (ids.has(node.id)) errors.push({ type: 'duplicate_id', id: node.id });
    ids.add(node.id);
  });

  const nodeIds = new Set(nodes.map((n) => n.id).filter(Boolean));
  (graph.relationships || []).forEach((entry) => {
    if (!nodeIds.has(entry.id)) errors.push({ type: 'orphan_node', id: entry.id });
    (entry.related || []).forEach((relatedId) => {
      if (!nodeIds.has(relatedId)) errors.push({ type: 'broken_relation', id: entry.id, relatedId });
    });
  });

  return { valid: errors.length === 0, errors };
}

module.exports = { validateRegistry };
