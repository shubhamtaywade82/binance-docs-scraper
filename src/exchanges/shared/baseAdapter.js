/** Base exchange adapter contract for discovery/extraction/normalization hooks. */
class BaseAdapter {
  constructor({ name, baseUrl, startUrl, allowedPathPrefix }) {
    this.name = name;
    this.baseUrl = baseUrl;
    this.startUrl = startUrl;
    this.allowedPathPrefix = allowedPathPrefix;
  }

  normalizeUrl(raw) {
    const url = new URL(raw, this.baseUrl);
    if (url.origin !== this.baseUrl || !url.pathname.startsWith(this.allowedPathPrefix)) return null;
    url.hash = '';
    url.search = '';
    return url.toString().replace(/\/$/, '');
  }

  discoverLinks($, currentUrl) {
    const links = new Set();
    $('.menu__link, a[href]').each((_, el) => {
      const href = $(el).attr('href');
      if (!href) return;
      const normalized = this.normalizeUrl(href);
      if (normalized) links.add(normalized);
    });
    links.delete(currentUrl);
    return [...links];
  }
}

module.exports = { BaseAdapter };
