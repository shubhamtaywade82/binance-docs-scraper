---
title: "Event: Order update"
url: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Order-update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:55:05.853Z
---
# Event: Order update

> Source: <https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Order-update>

# Event: Order update

## Event Description

When new order created, order status changed will push such event. event type is `ORDER_TRADE_UPDATE`.

**Side**

- BUY
- SELL

**Order Type**

- LIMIT

**Execution Type**

- NEW
- CANCELED
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

## URL PATH

`/private`

## Event Name

`ORDER_TRADE_UPDATE`

## Update Speed

**50ms**

## Response Example

```json
{
  "e": "ORDER_TRADE_UPDATE",
  "E": 1568879465651,
  "T": 1568879465650,
  "o": {
    "s": "BTCUSDT",
    "c": "TEST",
    "S": "SELL",
    "o": "TRAILING_STOP_MARKET",
    "f": "GTC",
    "q": "0.001",
    "p": "0",
    "ap": "0",
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
    "ot": "TRAILING_STOP_MARKET",
    "rp": "0",
    "V": "EXPIRE_TAKER"
  }
}
```
