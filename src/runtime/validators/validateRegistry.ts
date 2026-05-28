/** Validate semantic registry graph integrity. */
function validateRegistry(nodes: any[], graph: any) {
  const errors: any[] = [];
  const ids = new Set<string>();

  nodes.forEach((node: any) => {
    if (!node.id) errors.push({ type: 'missing_id', node });
    if (ids.has(node.id)) errors.push({ type: 'duplicate_id', id: node.id });
    ids.add(node.id);
  });

  const nodeIds = new Set(nodes.map((n: any) => n.id).filter(Boolean));
  (graph.relationships || []).forEach((entry: any) => {
    if (!nodeIds.has(entry.id)) errors.push({ type: 'orphan_node', id: entry.id });
    (entry.related || []).forEach((relatedId: string) => {
      if (!nodeIds.has(relatedId)) errors.push({ type: 'broken_relation', id: entry.id, relatedId });
    });
  });

  return { valid: errors.length === 0, errors };
}

export { validateRegistry };
