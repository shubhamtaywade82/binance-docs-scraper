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
}

module.exports = { DeltaAdapter };
