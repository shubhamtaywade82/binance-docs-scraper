/** Compile AsyncAPI document into runtime websocket channel types. */
function compileAsyncApi({ exchange, market, doc }: { exchange: string, market: string, doc: any }) {
  if (!doc || typeof doc !== 'object') return [];
  const channels = doc.channels || {};

  return Object.entries(channels).map(([channel, spec]: [string, any]) => {
    const sub = spec.subscribe || {};
    const pub = spec.publish || {};
    const message = sub.message || pub.message || {};

    return {
      id: `${exchange}.${market}.ws.${channel.replace(/[^a-zA-Z0-9_.-]/g, '_')}`,
      exchange,
      market,
      transport: 'websocket',
      channel,
      publish: !!spec.publish,
      subscribe: !!spec.subscribe,
      payloadSchema: message.payload || {},
      bindings: spec.bindings || {},
      stateModel: {
        requiresSnapshot: /depth|orderbook/i.test(channel),
        sequenceField: /depth|orderbook/i.test(channel) ? 'u' : null,
      },
    };
  });
}

export {  compileAsyncApi  };
