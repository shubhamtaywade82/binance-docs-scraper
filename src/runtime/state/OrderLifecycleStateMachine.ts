const STATES = ['NEW', 'PARTIALLY_FILLED', 'FILLED', 'CANCELED', 'REJECTED', 'EXPIRED'];
const ALLOWED: { [key: string]: string[] } = {
  NEW: ['PARTIALLY_FILLED', 'FILLED', 'CANCELED', 'REJECTED', 'EXPIRED'],
  PARTIALLY_FILLED: ['PARTIALLY_FILLED', 'FILLED', 'CANCELED', 'EXPIRED'],
  FILLED: [],
  CANCELED: [],
  REJECTED: [],
  EXPIRED: [],
};

/** Deterministic order lifecycle transition validator. */
class OrderLifecycleStateMachine {
  transition(current: string | null, next: string) {
    if (!STATES.includes(next)) return { valid: false, reason: 'unknown_state' };
    if (!current) return { valid: next === 'NEW', reason: next === 'NEW' ? null : 'must_start_new' };
    if (!ALLOWED[current]?.includes(next)) return { valid: false, reason: 'invalid_transition' };
    return { valid: true, reason: null };
  }
}

export { OrderLifecycleStateMachine };
