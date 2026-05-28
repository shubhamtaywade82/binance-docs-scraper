/** Validate state synchronization requirements for websocket stream models. */
function validateWebsocketStateModel(schema: any) {
  const errors: string[] = [];
  if (!schema.stream) errors.push('missing_stream');
  if (!schema.transport || schema.transport !== 'websocket') errors.push('invalid_transport');

  if (schema.channel === 'orderbook_incremental') {
    if (!schema.stateModel?.requiresSnapshot) errors.push('snapshot_required');
    if (!schema.stateModel?.sequenceField) errors.push('sequence_field_required');
  }

  return { valid: errors.length === 0, errors };
}

export {  validateWebsocketStateModel  };
