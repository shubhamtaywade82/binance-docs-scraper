/** Compile websocket semantic schema into executable runtime definition. */
function compileWebsocketRuntime(schema) {
  return {
    id: schema.id,
    transport: 'websocket',
    channel: schema.channel || schema.stream,
    market: schema.market,
    authRequired: !!schema.authentication,
    stateModel: schema.stateModel || {},
    reliability: schema.reliability || {},
    runtime: {
      connect: 'ws_connect',
      authenticate: schema.authentication ? 'ws_auth' : null,
      subscribe: 'ws_subscribe',
      heartbeat: 'ws_heartbeat',
      reconcile: 'state_reconcile',
      resync: (schema.stateModel || {}).requiresSnapshot ? 'snapshot_then_replay' : 'resubscribe',
    },
  };
}

module.exports = { compileWebsocketRuntime };
