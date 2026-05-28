/**
 * Live depth runtime skeleton.
 * Responsibility: connect, sequence-check, reconcile snapshot+incremental deltas.
 */
class DepthStreamRuntime {
  wsClient: any;
  snapshotFetcher: any;
  symbol: any;
  onUpdate: any;
  lastSequence: any;
  snapshot: any;

  constructor({ wsClient, snapshotFetcher, symbol, onUpdate }: any) {
    this.wsClient = wsClient;
    this.snapshotFetcher = snapshotFetcher;
    this.symbol = symbol;
    this.onUpdate = onUpdate;
    this.lastSequence = null;
    this.snapshot = null;
  }

  async connect() {
    this.snapshot = await this.snapshotFetcher(this.symbol);
    this.lastSequence = this.snapshot?.lastUpdateId || null;
    await this.wsClient.connect();
    await this.wsClient.subscribe(`${this.symbol.toLowerCase()}@depth`);
  }

  validateSequence(event: any) {
    const seq = event?.u;
    const prev = event?.pu;
    if (this.lastSequence === null) return true;
    return prev === this.lastSequence || seq >= this.lastSequence;
  }

  async onEvent(event: any) {
    if (!this.validateSequence(event)) {
      await this.resync();
      return;
    }
    this.lastSequence = event.u || this.lastSequence;
    this.onUpdate(event);
  }

  async resync() {
    this.snapshot = await this.snapshotFetcher(this.symbol);
    this.lastSequence = this.snapshot?.lastUpdateId || null;
  }
}

export { DepthStreamRuntime };
