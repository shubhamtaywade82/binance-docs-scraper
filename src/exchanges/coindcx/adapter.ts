import { BaseAdapter } from '../shared/baseAdapter.js';
import type { CheerioAPI } from 'cheerio';
import type { ApiSchema } from '../../types.js';

class CoindcxAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'coindcx',
      baseUrl: 'https://docs.coindcx.com',
      startUrl: process.env.START_URL || 'https://docs.coindcx.com',
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
    [
      '.toc-wrapper', '#nav-button', '.dark-box', 'script', 'style', 'nav'
    ].forEach((s) => $(s).remove());
  }

  extractApiSchemas(markdown: string, url: string): ApiSchema[] {
    return [];
  }
}

export {  CoindcxAdapter  };
