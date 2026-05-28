---
title: "Event: Futures Order update"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Futures-Order-update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:31.686Z
---
# Event: Futures Order update

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Futures-Order-update>

# Event: Futures Order update

## Event Description

When new order created, order status changed will push such event. event type is `ORDER_TRADE_UPDATE`.

**Side**

- BUY
- SELL

**Order Type**

- MARKET
- LIMIT
- LIQUIDATION

**Execution Type**

- NEW
- CANCELED
- CALCULATED - Liquidation Execution
- EXPIRED
- TRADE

**Order Status**

- NEW
- PARTIALLY\_FILLED
- FILLED
- CANCELED
- EXPIRED
- EXPIRED\_IN\_MATCH

**Time in force**

- GTC
- IOC
- FOK
- GTX

**Liquidation and ADL:**

- If user gets liquidated due to insufficient margin balance:
  - c shows as "autoclose-XXX"，X shows as "NEW"
- If user has enough margin balance but gets ADL:
  - c shows as “adl\_autoclose”，X shows as “NEW”

## Event Name

`ORDER_TRADE_UPDATE`

## Response Example

```json
{
  "e": "ORDER_TRADE_UPDATE",
  "fs": "UM",
  "E": 1568879465651,
  "T": 1568879465650,
  "i": "",
  "o": {
    "s": "BTCUSDT",
    "c": "TEST",
    "S": "SELL",
    "o": "MARKET",
    "f": "GTC",
    "q": "0.001",
    "p": "0",
    "ap": "0",
    "sp": "7103.04",
    "x": "NEW",
    "X": "NEW",
    "i": 8886774,
    "l": "0",
    "z": "0",
    "L": "0",
    "N": "USDT",
    "n": "0",
    "T": 1568879465650,
    "t": 0,
    "b": "0",
    "a": "9.91",
    "m": false,
    "R": false,
    "ps": "LONG",
    "rp": "0",
    "st": "C_TAKE_PROFIT",
    "si": 12893,
    "V": "EXPIRE_TAKER",
    "gtd": 0
  }
}
```
