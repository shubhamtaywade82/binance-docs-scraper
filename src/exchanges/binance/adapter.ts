import { BaseAdapter } from '../shared/baseAdapter.js';

class BinanceAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'binance',
      baseUrl: 'https://developers.binance.com',
      startUrl: process.env.START_URL || 'https://developers.binance.com/docs/derivatives/change-log',
      allowedPathPrefix: process.env.ALLOWED_PATH_PREFIX || '/docs/derivatives',
    });
  }
}

export {  BinanceAdapter  };
