const TYPE_MAP = {
  BOOLEAN: 'boolean',
  BOOL: 'boolean',
  STRING: 'string',
  LONG: 'integer',
  INT: 'integer',
  INTEGER: 'integer',
  DECIMAL: 'number',
  FLOAT: 'number',
  DOUBLE: 'number',
};

function inferType(rawType = '', name = '') {
  const normalized = String(rawType).trim().toUpperCase();
  if (TYPE_MAP[normalized]) return TYPE_MAP[normalized];
  if (/price|qty|quantity|amount/i.test(name)) return 'number';
  if (/time|timestamp|window/i.test(name)) return 'integer';
  if (/reduceOnly|closePosition|priceProtect/i.test(name)) return 'boolean';
  return 'string';
}

function inferConstraints(name = '', description = '') {
  const text = `${name} ${description}`.toLowerCase();
  const constraints = {};

  if (text.includes('reduceonly')) {
    constraints.markets = ['futures'];
  }
  if (text.includes('trailing')) {
    constraints.orderTypes = ['TRAILING_STOP_MARKET'];
  }
  if (text.includes('good till') || text.includes('timeinforce')) {
    constraints.orderTypes = ['LIMIT', 'STOP', 'TAKE_PROFIT'];
  }

  return constraints;
}

/** Normalize raw parameter rows into typed runtime semantics. */
function normalizeParams(rawParameters = []) {
  return rawParameters.map((param) => ({
    name: param.name,
    type: inferType(param.type, param.name),
    required: /mandatory|required/i.test(param.description || ''),
    constraints: inferConstraints(param.name, param.description),
    description: param.description || '',
  }));
}

module.exports = { normalizeParams };
