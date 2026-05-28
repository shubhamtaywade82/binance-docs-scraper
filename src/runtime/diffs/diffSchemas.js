/** Create deterministic semantic diffs between two normalized schemas. */
function diffSchemas(previousSchema, nextSchema) {
  const changes = [];
  if (!previousSchema) return { changes: [{ type: 'schema_added' }] };
  if (!nextSchema) return { changes: [{ type: 'schema_removed' }] };

  if (previousSchema.rateLimitWeight !== nextSchema.rateLimitWeight) {
    changes.push({ type: 'weight_changed', from: previousSchema.rateLimitWeight, to: nextSchema.rateLimitWeight });
  }

  const prevParams = new Set((previousSchema.parameters || []).map((p) => p.name));
  const nextParams = new Set((nextSchema.parameters || []).map((p) => p.name));
  for (const p of nextParams) if (!prevParams.has(p)) changes.push({ type: 'parameter_added', parameter: p });
  for (const p of prevParams) if (!nextParams.has(p)) changes.push({ type: 'parameter_removed', parameter: p });

  if (previousSchema.deprecated !== nextSchema.deprecated) {
    changes.push({ type: 'deprecated_changed', from: previousSchema.deprecated, to: nextSchema.deprecated });
  }

  return { changes };
}

module.exports = { diffSchemas };
