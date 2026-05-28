/** Compile OpenAPI document into runtime endpoint types. */
function compileOpenApi({ exchange, market, doc }) {
  if (!doc || typeof doc !== 'object') return [];
  const paths = doc.paths || {};
  const compiled = [];

  Object.entries(paths).forEach(([path, ops]) => {
    Object.entries(ops || {}).forEach(([method, operation]) => {
      const op = operation || {};
      const id = `${exchange}.${market}.${(op.operationId || `${method}_${path}`).replace(/[^a-zA-Z0-9_.-]/g, '_')}`;
      compiled.push({
        id,
        exchange,
        market,
        transport: 'rest',
        method: method.toUpperCase(),
        path,
        inputSchema: { parameters: op.parameters || [], requestBody: op.requestBody || null },
        outputSchema: op.responses || {},
        auth: (op.security || doc.security || []).length > 0 ? { required: true, schemes: op.security || doc.security } : { required: false, schemes: [] },
        constraints: { rateLimitWeight: null },
        capabilities: {},
      });
    });
  });

  return compiled;
}

module.exports = { compileOpenApi };
