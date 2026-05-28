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
}

module.exports = { CoindcxAdapter };
