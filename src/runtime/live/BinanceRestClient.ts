/**
 * Live REST client skeleton for exchange execution.
 * Responsibility: validate + sign + execute + reconcile a single REST action.
 */
class BinanceRestClient {
  signer: any;
  httpClient: any;
  orderValidator: any;
  policyValidator: any;

  constructor({ signer, httpClient, orderValidator, policyValidator }: any) {
    this.signer = signer;
    this.httpClient = httpClient;
    this.orderValidator = orderValidator;
    this.policyValidator = policyValidator;
  }

  /** Validate order intent against capability and policy checks. */
  validate({ registryNode, intent, policy }: any) {
    const orderCheck = this.orderValidator({ registryNode, intent });
    if (!orderCheck.valid) return orderCheck;
    return this.policyValidator({ intent, policy });
  }

  /** Sign request payload/query for authenticated execution. */
  sign({ method, path, query = {}, body = {} }: any) {
    return this.signer.sign({ method, path, query, body });
  }

  /** Execute signed REST request through injected HTTP client. */
  async execute({ method, path, query = {}, body = {}, headers = {} }: any) {
    return this.httpClient.request({ method, path, query, body, headers });
  }

  /** Reconcile execution response to deterministic order state shape. */
  reconcile(response: any) {
    return {
      orderId: response?.orderId || response?.data?.orderId || null,
      status: response?.status || response?.data?.status || 'UNKNOWN',
      raw: response,
    };
  }
}

export { BinanceRestClient };
