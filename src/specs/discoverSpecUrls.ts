/** Discover OpenAPI/AsyncAPI spec URLs from HTML. */
function discoverSpecUrls($: any, baseUrl: string): { openapi: string[]; asyncapi: string[] } {
  const openapi = new Set<string>();
  const asyncapi = new Set<string>();

  $('a[href], script[src], link[href]').each((_: any, el: any) => {
    const href = $(el).attr('href') || $(el).attr('src');
    if (!href) return;
    const abs = new URL(href, baseUrl).toString();
    const low = abs.toLowerCase();
    if (low.includes('openapi') || low.endsWith('.yaml') || low.endsWith('.yml') || low.endsWith('.json')) {
      if (low.includes('asyncapi')) asyncapi.add(abs);
      else openapi.add(abs);
    }
  });

  $('script').each((_: any, el: any) => {
    const txt = ($(el).html() || '').toLowerCase();
    const rx = /(https?:\/\/[^"'\s]+(?:openapi|asyncapi)[^"'\s]*)/g;
    for (const m of txt.matchAll(rx)) {
      if (m[1].includes('asyncapi')) asyncapi.add(m[1]);
      else openapi.add(m[1]);
    }
  });

  return { openapi: [...openapi], asyncapi: [...asyncapi] };
}

export { discoverSpecUrls };
