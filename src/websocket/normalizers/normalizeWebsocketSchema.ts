/** Normalize websocket semantics into exchange-agnostic model. */
function normalizeWebsocketSchema({ exchange, market, extracted }: { exchange: string, market: string, extracted: any }) {
  return (extracted.streams || []).map((streamRow: any) => {
    const stream = streamRow.stream;
    const kind = /depth/i.test(stream)
      ? 'orderbook_incremental'
      : /aggtrade|trade/i.test(stream)
        ? 'market_trades'
        : /kline/i.test(stream)
          ? 'kline'
          : /markprice/i.test(stream)
            ? 'mark_price'
            : 'unknown';

    return {
      id: `${exchange}.${market}.ws.${stream}`,
      exchange,
      market,
      transport: 'websocket',
      stream,
      channel: kind,
      updateSpeedMs: streamRow.updateSpeedMs,
      authentication: false,
      eventTypes: extracted.eventTypes || [],
      subscriptionSchema: extracted.subscriptionExamples || [],
      payloadSchema: {},
      stateModel: {
        requiresSnapshot: kind === 'orderbook_incremental',
        snapshotEndpoint: kind === 'orderbook_incremental' ? '/fapi/v1/depth' : null,
        sequenceField: kind === 'orderbook_incremental' ? 'u' : null,
        previousSequenceField: kind === 'orderbook_incremental' ? 'pu' : null,
        reconnectRequired: true,
      },
      reliability: {
        guaranteedDelivery: false,
        supportsReplay: false,
        requiresHeartbeat: true,
        maxSilenceMs: 10000,
      },
    };
  });
}

export {  normalizeWebsocketSchema  };
