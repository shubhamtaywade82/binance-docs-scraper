---
title: "Event: Order Update"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-Order-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:40:49.087Z
---
# Event: Order Update

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/user-data-streams/Event-Order-Update

# Event: Order Update

## Event Description

When new order created, modified, order status changed will push such event. event type is `ORDER_TRADE_UPDATE`.

**Side**

-   BUY
-   SELL

**Position side:**

-   BOTH
-   LONG
-   SHORT

**Order Type**

-   MARKET
-   LIMIT
-   STOP
-   TAKE\_PROFIT
-   LIQUIDATION

**Execution Type**

-   NEW
-   CANCELED
-   CALCULATED - Liquidation Execution
-   EXPIRED
-   TRADE
-   AMENDMENT - Order Modified

**Order Status**

-   NEW
-   PARTIALLY\_FILLED
-   FILLED
-   CANCELED
-   EXPIRED
-   EXPIRED\_IN\_MATCH

**Time in force**

-   GTC
-   IOC
-   FOK
-   GTX

**Liquidation and ADL:**

-   If user gets liquidated due to insufficient margin balance:
    
    -   `c` shows as "autoclose-XXX"，`X` shows as "NEW"
-   If user has enough margin balance but gets ADL:
    
    -   `c` shows as “adl\_autoclose”，`X` shows as “NEW”

**Expiry Reason**

-   `0`: None, the default value
-   `1`: Order has expired to prevent users from inadvertently trading against themselves
-   `2`: IOC order could not be filled completely, remaining quantity is canceled
-   `3`: IOC order could not be filled completely to prevent users from inadvertently trading against themselves, remaining quantity is canceled
-   `4`: Order has been canceled, as it's knocked out by another higher priority RO (market) order or reversed positions would be opened
-   `5`: Order has expired when the account was liquidated
-   `6`: Order has expired as GTE condition unsatisfied
-   `7`: Order has been canceled as the symbol is delisted
-   `8`: The initial order has expired after the stop order is triggered
-   `9`: Market order could not be filled completely, remaining quantity is canceled
-   `10`: FOK order could not be filled completely, the order is canceled
-   `11`: Order has been canceled, as it's failed Post-only check.

## Event Name

`ORDER_TRADE_UPDATE`

## Response Example

```json
{
  "e": "ORDER_TRADE_UPDATE",
  "E": 1591274595442,
  "T": 1591274595442,
  "i": "SfsR",
  "o": {
    "s": "BTCUSD_200925",
    "c": "TEST",
    "S": "SELL",
    "o": "TRAILING_STOP_MARKET",
    "f": "GTC",
    "q": "2",
    "p": "0",
    "ap": "0",
    "sp": "9103.1",
    "x": "NEW",
    "X": "NEW",
    "i": 8888888,
    "l": "0",
    "z": "0",
    "L": "0",
    "ma": "BTC",
    "N": "BTC",
    "n": "0",
    "T": 1591274595442,
    "t": 0,
    "rp": "0",
    "b": "0",
    "a": "0",
    "m": false,
    "R": false,
    "wt": "CONTRACT_PRICE",
    "ot": "TRAILING_STOP_MARKET",
    "ps": "LONG",
    "cp": false,
    "AP": "9476.8",
    "cr": "5.0",
    "pP": false,
    "V": "EXPIRE_TAKER",
    "pm": "OPPONENT",
    "er": "0"
  }
}
```
