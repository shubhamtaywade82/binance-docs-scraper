const { BaseAdapter } = require('../shared/baseAdapter');

class DeltaAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'delta',
      baseUrl: 'https://docs.delta.exchange',
      startUrl: process.env.START_URL || 'https://docs.delta.exchange',
      allowedPathPrefix: process.env.ALLOWED_PATH_PREFIX || '/',
    });
  }

  selectMainContent($) {
    const el = $('.page-wrapper').first();
    if (el.length) return el.html();
    const body = $('body').first();
    return body.html() || '';
  }

  cleanDocument($) {
    [
      '.toc-wrapper', '#nav-button', '.dark-box', 'script', 'style', 'nav'
    ].forEach((s) => $(s).remove());
  }

  extractApiSchemas(markdown, url) {
    return [];
  }
}

module.exports = { DeltaAdapter };
