import { BaseAdapter } from '../shared/baseAdapter.js';
import type { CheerioAPI } from 'cheerio';
import type { ApiSchema } from '../../types.js';

class DeltaAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'delta',
      baseUrl: 'https://docs.delta.exchange',
      startUrl: process.env.START_URL || 'https://docs.delta.exchange',
      allowedPathPrefix: process.env.ALLOWED_PATH_PREFIX || '/',
    });
  }

  selectMainContent($: CheerioAPI): string {
    const el = $('.page-wrapper').first();
    if (el.length) return el.html() || '';
    const body = $('body').first();
    return body.html() || '';
  }

  cleanDocument($: CheerioAPI): void {
    ['.toc-wrapper', '#nav-button', '.dark-box', 'script', 'style', 'nav'].forEach((s) => $(s).remove());
  }

  extractApiSchemas(_markdown: string, _url: string): ApiSchema[] {
    return [];
  }
}

export { DeltaAdapter };
