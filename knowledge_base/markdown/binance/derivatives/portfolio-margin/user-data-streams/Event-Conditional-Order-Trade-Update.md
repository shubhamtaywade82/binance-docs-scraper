---
title: "Event: Conditional Order Trade Update"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Conditional-Order-Trade-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:16.514Z
---
# Event: Conditional Order Trade Update

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Conditional-Order-Trade-Update>

# Event: Conditional Order Trade Update

## Event Description

When new order created, order status changed will push such event. event type is `CONDITIONAL_ORDER_TRADE_UPDATE`.

**Side**

- BUY
- SELL

**Conditional Order Type**

- STOP
- TAKE\_PROFIT
- STOP\_MARKET
- TAKE\_PROFIT\_MARKET
- TRAILING\_STOP\_MARKET

**Execution Type**

- NEW
- CANCELED
- CALCULATED - Liquidation Execution
- EXPIRED
- TRADE

**Order Status**

- NEW
- CANCELED
- EXPIRED
- TRIGGERED
- FINISHED

**Time in force**

- GTC
- IOC
- FOK
- GTX

## Event Name

`CONDITIONAL_ORDER_TRADE_UPDATE`

## Response Example

```json
{
  "e": "CONDITIONAL_ORDER_TRADE_UPDATE",
  "T": 1669262908216,
  "E": 1669262908218,
  "fs": "UM",
  "so": {
    "s": "BTCUSDT",
    "c": "TEST",
    "si": 176057039,
    "S": "SELL",
    "st": "TRAILING_STOP_MARKET",
    "f": "GTC",
    "q": "0.001",
    "p": "0",
    "sp": "7103.04",
    "os": "NEW",
    "T": 1568879465650,
    "ut": 1669262908216,
    "R": false,
    "wt": "MARK_PRICE",
    "ps": "LONG",
    "cp": false,
    "AP": "7476.89",
    "cr": "5.0",
    "i": 8886774,
    "V": "EXPIRE_TAKER",
    "gtd": 0
  }
}
```
