---
title: "Event: Order Update"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Order-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:44:03.422Z
---
# Event: Order Update

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Order-Update>

# Event: Order Update

## Event Description

When new order created, order status changed will push such event. event type is `ORDER_TRADE_UPDATE`.

## URL PATH

`/private`

**Side**

- BUY
- SELL

**Order Type**

- LIMIT
- MARKET
- STOP
- STOP\_MARKET
- TAKE\_PROFIT
- TAKE\_PROFIT\_MARKET
- TRAILING\_STOP\_MARKET
- LIQUIDATION

**Execution Type**

- NEW
- CANCELED
- CALCULATED - Liquidation Execution
- EXPIRED
- TRADE
- AMENDMENT - Order Modified

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

**Working Type**

- MARK\_PRICE
- CONTRACT\_PRICE

**Liquidation and ADL:**

- If user gets liquidated due to insufficient margin balance:

  - `c` shows as "autoclose-XXX"，`X` shows as "NEW"
- If user has enough margin balance but gets ADL:

  - `c` shows as “adl\_autoclose”，`X` shows as “NEW”

**Expiry Reason**

- `0`: None, the default value
- `1`: Order has expired to prevent users from inadvertently trading against themselves
- `2`: IOC order could not be filled completely, remaining quantity is canceled
- `3`: IOC order could not be filled completely to prevent users from inadvertently trading against themselves, remaining quantity is canceled
- `4`: Order has been canceled, as it's knocked out by another higher priority RO (market) order or reversed positions would be opened
- `5`: Order has expired when the account was liquidated
- `6`: Order has expired as GTE condition unsatisfied
- `7`: Order has been canceled as the symbol is delisted
- `8`: The initial order has expired after the stop order is triggered
- `9`: Market order could not be filled completely, remaining quantity is canceled

## Event Name

`ORDER_TRADE_UPDATE`

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
    "wt": "CONTRACT_PRICE",
    "ot": "TRAILING_STOP_MARKET",
    "ps": "LONG",
    "cp": false,
    "AP": "7476.89",
    "cr": "5.0",
    "pP": false,
    "si": 0,
    "ss": 0,
    "rp": "0",
    "V": "EXPIRE_TAKER",
    "pm": "OPPONENT",
    "gtd": 0,
    "er": "0"
  }
}
```
