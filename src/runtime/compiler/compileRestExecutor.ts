import {  generateToolSchema  } from '../tools/generateToolSchema.js';

/** Compile a normalized endpoint into an executable REST runtime definition. */
function compileRestExecutor(endpoint: any) {
  const toolSchema = generateToolSchema(endpoint);

  return {
    id: endpoint.id,
    transport: 'rest',
    method: endpoint.method,
    path: endpoint.path,
    market: endpoint.market,
    auth: endpoint.auth,
    constraints: endpoint.constraints || {},
    capabilities: endpoint.capabilities || {},
    toolSchema,
    runtime: {
      validate: 'validateOrder + validateExecutionPolicy',
      sign: 'exchange_auth_signer',
      execute: 'http_request',
      retry: 'policy_backoff',
      reconcile: 'order_state_reconcile',
    },
  };
}

export {  compileRestExecutor  };
