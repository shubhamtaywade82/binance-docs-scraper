import slugify from 'slugify';
import { normalizeParams } from '../runtime/normalization/normalizeParams.js';
import type { ApiSchema } from '../types.js';

const ACTION_MAP: Record<string, string> = {
  POST: 'create',
  GET: 'read',
  PUT: 'update',
  PATCH: 'update',
  DELETE: 'delete',
};

function inferResource(endpointPath: string | null): string {
  if (!endpointPath) return 'unknown';
  const parts = endpointPath.split('/').filter(Boolean);
  return parts[parts.length - 1] || 'unknown';
}

/** Normalize Binance REST page schema into exchange-agnostic model. */
function normalizeBinanceRestSchema(rawSchema: ApiSchema): any {
  const method = rawSchema.method || null;
  const resource = inferResource(rawSchema.path);
  const action = method ? ACTION_MAP[method] || 'custom' : 'custom';

  return {
    id: rawSchema.path && method ? `binance.usdm.${resource}.${action}` : null,
    exchange: 'binance',
    market: 'usdm_futures',
    transport: 'rest',
    resource,
    action,
    path: rawSchema.path,
    method,
    auth: rawSchema.security,
    rateLimitWeight: rawSchema.weight,
    parameters: normalizeParams(rawSchema.parameters || []),
    responseExamples: rawSchema.response_examples || [],
    schemaVersion: 1,
    deprecated: false,
    fingerprint: slugify(`${method || 'na'}-${rawSchema.path || 'na'}`, { lower: true, strict: true }),
  };
}

export { normalizeBinanceRestSchema };
