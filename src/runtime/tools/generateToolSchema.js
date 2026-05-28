/** Generate deterministic tool schema from normalized endpoint. */
function generateToolSchema(endpoint) {
  const properties = {};
  const required = [];

  (endpoint.parameters || []).forEach((param) => {
    properties[param.name] = {
      type: param.type,
      description: param.description,
    };
    if (param.required) required.push(param.name);
  });

  return {
    name: endpoint.id,
    description: `${endpoint.method || 'CALL'} ${endpoint.path || ''}`.trim(),
    input_schema: {
      type: 'object',
      properties,
      required,
      additionalProperties: false,
    },
  };
}

module.exports = { generateToolSchema };
