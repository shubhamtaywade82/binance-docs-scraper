const { BaseAdapter } = require('../shared/baseAdapter');

class DhanhqAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'dhanhq',
      baseUrl: 'https://dhanhq.co',
      startUrl: process.env.START_URL || 'https://dhanhq.co/docs/v2',
      allowedPathPrefix: process.env.ALLOWED_PATH_PREFIX || '/docs/v2',
    });
  }
}

module.exports = { DhanhqAdapter };
