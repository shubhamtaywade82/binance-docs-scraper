import type { Adapter } from '../types.js';
import { BinanceAdapter } from '../exchanges/binance/adapter.js';
import { DhanhqAdapter } from '../exchanges/dhanhq/adapter.js';
import { CoindcxAdapter } from '../exchanges/coindcx/adapter.js';
import { DeltaAdapter } from '../exchanges/delta/adapter.js';
import { OllamaAdapter } from '../exchanges/ollama/adapter.js';

function getAdapter(exchange?: string): Adapter {
  switch ((exchange || 'binance').toLowerCase()) {
    case 'dhanhq':
      return new DhanhqAdapter();
    case 'coindcx':
      return new CoindcxAdapter();
    case 'delta':
      return new DeltaAdapter();
    case 'ollama':
      return new OllamaAdapter();
    case 'binance':
    default:
      return new BinanceAdapter();
  }
}

export { getAdapter };
