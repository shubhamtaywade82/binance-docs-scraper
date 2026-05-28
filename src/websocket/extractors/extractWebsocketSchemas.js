/** Extract websocket connection/subscription/event semantics from markdown. */
function extractWebsocketSchemas(markdown = '') {
  const connections = [...markdown.matchAll(/wss:\/\/[\w./?=&-]+/g)].map((m) => m[0]);

  const streamMatches = [...markdown.matchAll(/@([a-zA-Z0-9_]+)(?:@([0-9]+ms))?/g)];
  const streams = streamMatches.map((m) => ({
    stream: m[1],
    updateSpeedMs: m[2] ? Number(m[2].replace('ms', '')) : null,
  }));

  const eventTypes = [...markdown.matchAll(/"e"\s*:\s*"([a-zA-Z0-9_]+)"/g)].map((m) => m[1]);

  const subscriptionExamples = [...markdown.matchAll(/```json\n([\s\S]*?SUBSCRIBE[\s\S]*?)```/g)].map((m) => m[1].trim());

  return {
    connections: [...new Set(connections)],
    streams,
    eventTypes: [...new Set(eventTypes)],
    subscriptionExamples,
  };
}

module.exports = { extractWebsocketSchemas };
