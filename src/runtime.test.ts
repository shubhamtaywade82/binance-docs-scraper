import test from 'node:test';
import assert from 'node:assert/strict';

import { diffSchemas } from './runtime/diffs/diffSchemas.js';
import { validateRegistry } from './runtime/validators/validateRegistry.js';
import { validateWebsocketStateModel } from './websocket/validators/validateWebsocketStateModel.js';
import { compileOpenApi } from './specs/compilers/compileOpenApi.js';
import { compileAsyncApi } from './specs/compilers/compileAsyncApi.js';
import { getAdapter } from './core/getAdapter.js';
import type { ApiSchema } from './types.js';

test('diffSchemas detects parameter and weight changes', () => {
  const previousSchema = {
    rateLimitWeight: 1,
    parameters: [{ name: 'symbol' }, { name: 'side' }],
    deprecated: false,
  } as unknown as ApiSchema;

  const nextSchema = {
    rateLimitWeight: 5,
    parameters: [{ name: 'symbol' }, { name: 'side' }, { name: 'reduceOnly' }],
    deprecated: false,
  } as unknown as ApiSchema;

  const diff = diffSchemas(previousSchema, nextSchema);
  assert.equal(
    diff.changes.some((c) => c.type === 'weight_changed'),
    true,
  );
  assert.equal(
    diff.changes.some((c) => c.type === 'parameter_added' && c.parameter === 'reduceOnly'),
    true,
  );
});

test('validateRegistry catches broken relations', () => {
  const nodes = [{ id: 'binance.usdm.order.create' }] as any[];
  const graph = { relationships: [{ id: 'binance.usdm.order.create', related: ['missing.node'] }] } as any;
  const result = validateRegistry(nodes, graph);
  assert.equal(result.valid, false);
  assert.equal(
    result.errors.some((e: any) => e.type === 'broken_relation'),
    true,
  );
});

test('validateWebsocketStateModel requires sequence field for incremental orderbook', () => {
  const schema = {
    stream: 'depth',
    transport: 'websocket',
    channel: 'orderbook_incremental',
    stateModel: { requiresSnapshot: true },
  } as any;

  const result = validateWebsocketStateModel(schema);
  assert.equal(result.valid, false);
  assert.equal(result.errors.includes('sequence_field_required'), true);
});

test('compileOpenApi compiles endpoint models', () => {
  const doc = {
    paths: {
      '/fapi/v1/order': {
        post: {
          operationId: 'createOrder',
          parameters: [{ name: 'symbol' }],
          responses: { '200': { description: 'ok' } },
        },
      },
    },
  } as any;

  const compiled = compileOpenApi({ exchange: 'binance', market: 'usdm_futures', doc });
  assert.equal(compiled.length, 1);
  assert.equal(compiled[0].method, 'POST');
  assert.equal(compiled[0].path, '/fapi/v1/order');
});

test('compileAsyncApi compiles websocket channel models', () => {
  const doc = {
    channels: {
      depth: {
        subscribe: { message: { payload: { type: 'object' } } },
      },
    },
  } as any;

  const compiled = compileAsyncApi({ exchange: 'binance', market: 'usdm_futures', doc });
  assert.equal(compiled.length, 1);
  assert.equal(compiled[0].transport, 'websocket');
  assert.equal(compiled[0].channel, 'depth');
});

test('getAdapter supports delta exchange', () => {
  const adapter = getAdapter('delta');
  assert.equal(adapter.name, 'delta');
  assert.equal(adapter.baseUrl, 'https://docs.delta.exchange');
});

test('getAdapter supports ollama docs adapter', () => {
  const adapter = getAdapter('ollama');
  assert.equal(adapter.name, 'ollama');
  assert.equal(adapter.baseUrl, 'https://docs.ollama.com');
});
