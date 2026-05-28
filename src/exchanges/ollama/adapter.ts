import { BaseAdapter } from '../shared/baseAdapter.js';

export class OllamaAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'ollama',
      baseUrl: 'https://docs.ollama.com',
      startUrl: process.env.START_URL || 'https://docs.ollama.com/api/introduction',
      allowedPathPrefix: process.env.ALLOWED_PATH_PREFIX || '/',
    });
  }
}
