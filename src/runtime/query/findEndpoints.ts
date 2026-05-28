/** Query normalized registry endpoints by semantic filters. */
function findEndpoints(nodes: any[], filters: any = {}) {
  return nodes.filter((node) => {
    if (filters.action && node.action !== filters.action) return false;
    if (filters.market && node.market !== filters.market) return false;
    if (filters.auth && node.auth !== filters.auth) return false;
    if (filters.transport && node.transport !== filters.transport) return false;
    if (filters.supportsTrailingStop && !node.capabilities?.supportsTrailingStop) return false;
    if (filters.supportsReduceOnly && !node.capabilities?.supportsReduceOnly) return false;
    return true;
  });
}

export {  findEndpoints  };
