/** Compile OpenAPI document into runtime endpoint types. */
function compileOpenApi({ exchange, market, doc }: { exchange: string; market: string; doc: any }) {
  if (!doc || typeof doc !== 'object') return [];
  const paths = doc.paths || {};
  const compiled: any[] = [];

  Object.entries(paths).forEach(([path, ops]: [string, any]) => {
    Object.entries(ops || {}).forEach(([method, operation]: [string, any]) => {
      if (!['get', 'post', 'put', 'delete', 'patch'].includes(method.toLowerCase())) return;
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
        auth:
          (op.security || doc.security || []).length > 0
            ? { required: true, schemes: op.security || doc.security }
            : { required: false, schemes: [] },
        constraints: { rateLimitWeight: null },
        capabilities: {},
      });
    });
  });

  return compiled;
}

export { compileOpenApi };
