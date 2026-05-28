import slugify from 'slugify';
import type { CheerioAPI } from 'cheerio';
import type { Adapter, ApiSchema } from '../../types.js';

/** Base exchange adapter contract for discovery/extraction/normalization hooks. */
class BaseAdapter implements Adapter {
  name: string;
  baseUrl: string;
  startUrl: string;
  allowedPathPrefix: string;

  constructor({ name, baseUrl, startUrl, allowedPathPrefix }: { name: string, baseUrl: string, startUrl: string, allowedPathPrefix: string }) {
    this.name = name;
    this.baseUrl = baseUrl;
    this.startUrl = startUrl;
    this.allowedPathPrefix = allowedPathPrefix;
  }

  normalizeUrl(raw: string, currentUrl: string = this.baseUrl): string | null {
    const url = new URL(raw, currentUrl);
    if (url.origin !== this.baseUrl || !url.pathname.startsWith(this.allowedPathPrefix)) return null;
    url.hash = '';
    url.search = '';
    return url.toString();
  }

  discoverLinks($: CheerioAPI, currentUrl: string): string[] {
    const links = new Set<string>();
    $('.menu__link, a[href]').each((_: any, el: any) => {
      const href = $(el).attr('href');
      if (!href) return;
      const normalized = this.normalizeUrl(href, currentUrl);
      if (normalized) links.add(normalized);
    });
    links.delete(currentUrl);
    return [...links];
  }

  cleanDocument($: CheerioAPI): void {
    [
      'nav', 'header', 'footer', 'script', 'style', '.navbar', '.pagination-nav', '.theme-doc-footer',
      '.table-of-contents', '.breadcrumbs', '.menu', '.theme-edit-this-page', '.clean-btn', '.hash-link',
      '.DocSearch', '.mobile-nav', '.theme-back-to-top-button'
    ].forEach((s) => $(s).remove());
  }

  selectMainContent($: CheerioAPI): string {
    const selectors = ['article', 'main article', '.theme-doc-markdown', 'main'];
    let best = '';
    for (const selector of selectors) {
      const el = $(selector).first();
      const html = el.html() || '';
      if (el.text().trim().length > 200 && html.length > best.length) best = html;
    }
    return best;
  }

  extractApiSchemas(markdown: string, url: string): ApiSchema[] {
    const endpoint = markdown.match(/\/(fapi|dapi)\/v1\/[\w/-]+/)?.[0] || null;
    const method = markdown.match(/\b(GET|POST|PUT|DELETE|PATCH)\b/)?.[1] || null;
    const weight = Number(markdown.match(/Request Weight\s*:?\s*(\d+)/i)?.[1] || NaN);
    const security = markdown.match(/\b(TRADE|USER_DATA|USER_STREAM|MARKET_DATA)\b/i)?.[1] || null;

    const parameters = [...markdown.matchAll(/^\|\s*([A-Za-z0-9_]+)\s*\|\s*([^|]*)\|\s*([^|]*)\|/gm)]
      .map((m) => ({ name: m[1], type: m[2].trim(), description: m[3].trim() }))
      .filter((p) => p.name.toLowerCase() !== 'name');

    const responseExamples = [...markdown.matchAll(/```json\n([\s\S]*?)```/g)].map((m) => m[1].trim());

    const schema: ApiSchema = {
      id: endpoint && method ? slugify(`${method}-${endpoint}`, { lower: true, strict: true }) : null,
      path: endpoint,
      method,
      security,
      weight: Number.isFinite(weight) ? weight : null,
      parameters,
      response_examples: responseExamples,
      errors: [],
    };

    return schema.id ? [schema] : [];
  }
}

export {  BaseAdapter  };
