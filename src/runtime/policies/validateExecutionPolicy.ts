/** Validate order intent against execution policy limits. */
function validateExecutionPolicy({ intent, policy }: { intent: any; policy: any }) {
  const violations: string[] = [];

  if (policy.blockedOrderTypes?.includes(intent.orderType)) violations.push('blocked_order_type');
  if (policy.allowReduceOnlyOnly && !intent.reduceOnly) violations.push('reduce_only_required');
  if (typeof policy.maxPositionSizeUsd === 'number' && Number(intent.notionalUsd || 0) > policy.maxPositionSizeUsd)
    violations.push('max_position_size_exceeded');
  if (typeof policy.maxLeverage === 'number' && Number(intent.leverage || 0) > policy.maxLeverage)
    violations.push('max_leverage_exceeded');

  return { valid: violations.length === 0, violations };
}

export { validateExecutionPolicy };
