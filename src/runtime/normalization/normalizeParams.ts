import type { ApiParameter } from '../../types.js';

const TYPE_MAP: Record<string, string> = {
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

function inferType(rawType: string = '', name: string = ''): string {
  const normalized = String(rawType).trim().toUpperCase();
  if (TYPE_MAP[normalized]) return TYPE_MAP[normalized];
  if (/price|qty|quantity|amount/i.test(name)) return 'number';
  if (/time|timestamp|window/i.test(name)) return 'integer';
  if (/reduceOnly|closePosition|priceProtect/i.test(name)) return 'boolean';
  return 'string';
}

function inferConstraints(name: string = '', description: string = ''): Record<string, any> {
  const text = `${name} ${description}`.toLowerCase();
  const constraints: Record<string, any> = {};

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
function normalizeParams(rawParameters: ApiParameter[] = []) {
  return rawParameters.map((param: ApiParameter) => ({
    name: param.name,
    type: inferType(param.type, param.name),
    required: /mandatory|required/i.test(param.description || ''),
    constraints: inferConstraints(param.name, param.description),
    description: param.description || '',
  }));
}

export { normalizeParams };
