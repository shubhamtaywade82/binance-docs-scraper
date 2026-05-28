/** Detect documentation provider from HTML content. */
function detectProvider(html = '') {
  const text = html.toLowerCase();
  if (text.includes('swagger-ui')) return 'swagger';
  if (text.includes('redoc')) return 'redoc';
  if (text.includes('docusaurus')) return 'docusaurus';
  if (text.includes('mintlify')) return 'mintlify';
  if (text.includes('gitbook')) return 'gitbook';
  return 'custom';
}

export {  detectProvider  };
