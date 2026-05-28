const { BaseAdapter } = require('../shared/baseAdapter');

class CoindcxAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'coindcx',
      baseUrl: 'https://docs.coindcx.com',
      startUrl: process.env.START_URL || 'https://docs.coindcx.com',
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

module.exports = { CoindcxAdapter };
