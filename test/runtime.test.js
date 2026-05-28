const test = require('node:test');
const assert = require('node:assert/strict');

const { diffSchemas } = require('../src/runtime/diffs/diffSchemas');
const { validateRegistry } = require('../src/runtime/validators/validateRegistry');
const { validateWebsocketStateModel } = require('../src/websocket/validators/validateWebsocketStateModel');
const { compileOpenApi } = require('../src/specs/compilers/compileOpenApi');
const { compileAsyncApi } = require('../src/specs/compilers/compileAsyncApi');
const { getAdapter } = require('../src/core/getAdapter');

test('diffSchemas detects parameter and weight changes', () => {
  const previousSchema = {
    rateLimitWeight: 1,
    parameters: [{ name: 'symbol' }, { name: 'side' }],
    deprecated: false,
  };
  const nextSchema = {
    rateLimitWeight: 5,
    parameters: [{ name: 'symbol' }, { name: 'side' }, { name: 'reduceOnly' }],
    deprecated: false,
  };

  const diff = diffSchemas(previousSchema, nextSchema);
  assert.equal(diff.changes.some((c) => c.type === 'weight_changed'), true);
  assert.equal(diff.changes.some((c) => c.type === 'parameter_added' && c.parameter === 'reduceOnly'), true);
});

test('validateRegistry catches broken relations', () => {
  const nodes = [{ id: 'binance.usdm.order.create' }];
  const graph = { relationships: [{ id: 'binance.usdm.order.create', related: ['missing.node'] }] };
  const result = validateRegistry(nodes, graph);
  assert.equal(result.valid, false);
  assert.equal(result.errors.some((e) => e.type === 'broken_relation'), true);
});

test('validateWebsocketStateModel requires sequence field for incremental orderbook', () => {
  const schema = {
    stream: 'depth',
    transport: 'websocket',
    channel: 'orderbook_incremental',
    stateModel: { requiresSnapshot: true },
  };

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
  };

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
  };

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
