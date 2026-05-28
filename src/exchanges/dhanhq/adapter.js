const { BaseAdapter } = require('../shared/baseAdapter');

class DhanhqAdapter extends BaseAdapter {
  constructor() {
    super({
      name: 'dhanhq',
      baseUrl: 'https://dhanhq.co',
      startUrl: process.env.START_URL || 'https://dhanhq.co/docs/v2/',
      allowedPathPrefix: process.env.ALLOWED_PATH_PREFIX || '/docs/v2',
    });
  }

  extractApiSchemas(markdown, url) {
    const slugify = require('slugify');
    const endpoint = markdown.match(/https:\/\/api\.dhan\.co\/v2(\/[\w/-]+)/)?.[1] || null;
    const method = markdown.match(/curl --request (GET|POST|PUT|DELETE|PATCH)/)?.[1] || null;

    const parameters = [...markdown.matchAll(/^\|\s*([A-Za-z0-9_]+)\s*\|\s*([^|]*)\|\s*([^|]*)\|/gm)]
      .map((m) => ({ name: m[1], type: m[2].trim(), description: m[3].trim() }))
      .filter((p) => p.name.toLowerCase() !== 'name');

    const responseExamples = [...markdown.matchAll(/```json\n([\s\S]*?)```/g)].map((m) => m[1].trim());

    const schema = {
      id: endpoint && method ? slugify(`${method}-${endpoint}`, { lower: true, strict: true }) : null,
      path: endpoint,
      method,
      security: 'apiKey',
      weight: 1,
      parameters,
      response_examples: responseExamples,
      errors: [],
    };

    return schema.id ? [schema] : [];
  }
}

module.exports = { DhanhqAdapter };
