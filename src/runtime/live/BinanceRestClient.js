/**
 * Live REST client skeleton for exchange execution.
 * Responsibility: validate + sign + execute + reconcile a single REST action.
 */
class BinanceRestClient {
  constructor({ signer, httpClient, orderValidator, policyValidator }) {
    this.signer = signer;
    this.httpClient = httpClient;
    this.orderValidator = orderValidator;
    this.policyValidator = policyValidator;
  }

  /** Validate order intent against capability and policy checks. */
  validate({ registryNode, intent, policy }) {
    const orderCheck = this.orderValidator({ registryNode, intent });
    if (!orderCheck.valid) return orderCheck;
    return this.policyValidator({ intent, policy });
  }

  /** Sign request payload/query for authenticated execution. */
  sign({ method, path, query = {}, body = {} }) {
    return this.signer.sign({ method, path, query, body });
  }

  /** Execute signed REST request through injected HTTP client. */
  async execute({ method, path, query = {}, body = {}, headers = {} }) {
    return this.httpClient.request({ method, path, query, body, headers });
  }

  /** Reconcile execution response to deterministic order state shape. */
  reconcile(response) {
    return {
      orderId: response?.orderId || response?.data?.orderId || null,
      status: response?.status || response?.data?.status || 'UNKNOWN',
      raw: response,
    };
  }
}

module.exports = { BinanceRestClient };
