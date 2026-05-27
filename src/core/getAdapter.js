const { BinanceAdapter } = require('../exchanges/binance/adapter');
const { DhanhqAdapter } = require('../exchanges/dhanhq/adapter');
const { CoindcxAdapter } = require('../exchanges/coindcx/adapter');

function getAdapter(exchange) {
  switch ((exchange || 'binance').toLowerCase()) {
    case 'dhanhq': return new DhanhqAdapter();
    case 'coindcx': return new CoindcxAdapter();
    case 'binance':
    default:
      return new BinanceAdapter();
  }
}

module.exports = { getAdapter };
