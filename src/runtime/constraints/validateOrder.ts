/** Validate requested order intent against normalized endpoint capabilities. */
function validateOrder({ registryNode, intent }: { registryNode: any, intent: any }) {
  if (!registryNode) {
    return { valid: false, supported: false, reason: 'endpoint_not_found', warnings: [] };
  }

  const warnings: string[] = [];
  const capabilities = registryNode.capabilities || {};

  if (intent.reduceOnly && !capabilities.supportsReduceOnly) {
    return { valid: false, supported: false, reason: 'reduce_only_unsupported', warnings };
  }

  if (intent.orderType && /TRAILING_STOP/i.test(intent.orderType) && !capabilities.supportsTrailingStop) {
    return { valid: false, supported: false, reason: 'trailing_stop_unsupported', warnings };
  }

  if (intent.positionMode === 'hedge' && !capabilities.supportsHedgeMode) {
    warnings.push('hedge_mode_may_be_unsupported');
  }

  if (registryNode.market !== intent.market) {
    return { valid: false, supported: false, reason: 'market_mismatch', warnings };
  }

  return { valid: true, supported: true, reason: null, warnings };
}

export {  validateOrder  };
