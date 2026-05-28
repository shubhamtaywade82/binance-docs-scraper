---
title: "Event: Margin Order Update"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Margin-Order-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:28.888Z
---
# Event: Margin Order Update

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Margin-Order-Update>

# Event: Margin Order Update

## Event Description

Margin orders are updated with the `executionReport` event.

**Execution types:**

- NEW - The order has been accepted into the engine.
- CANCELED - The order has been canceled by the user.
- REJECTED - The order has been rejected and was not processed (This message appears only with Cancel Replace Orders wherein the new order placement is rejected but the request to cancel request succeeds.)
- TRADE - Part of the order or all of the order's quantity has filled.
- EXPIRED - The order was canceled according to the order type's rules (e.g. LIMIT FOK orders with no fill, LIMIT IOC or MARKET orders that partially fill) or by the exchange, (e.g. orders canceled during liquidation, orders canceled during maintenance).
- TRADE\_PREVENTION - The order has expired due to STP trigger. Check the Public API Definitions for more relevant enum definitions.

## Event Name

`executionReport`

## Response Example

```json
{
  "e": "executionReport",
  "E": 1499405658658,
  "s": "ETHBTC",
  "c": "mUvoqJxFIILMdfAW5iGSOW",
  "S": "BUY",
  "o": "LIMIT",
  "f": "GTC",
  "q": "1.00000000",
  "p": "0.10264410",
  "P": "0.00000000",
  "d": 4,
  "F": "0.00000000",
  "g": -1,
  "C": "",
  "x": "NEW",
  "X": "NEW",
  "r": "NONE",
  "i": 4293153,
  "l": "0.00000000",
  "z": "0.00000000",
  "L": "0.00000000",
  "n": "0",
  "N": null,
  "T": 1499405658657,
  "t": -1,
  "v": 3,
  "I": 8641984,
  "w": true,
  "m": false,
  "O": 1499405658657,
  "Z": "0.00000000",
  "Y": "0.00000000",
  "Q": "0.00000000",
  "D": 1668680518494,
  "j": 1,
  "J": 1000000,
  "W": 1499405658657,
  "V": "NONE",
  "u": 1,
  "U": 37,
  "A": "3.000000",
  "B": "3.000000",
  "Cs": "BTCUSDT",
  "pl": "2.123456",
  "pL": "0.10000001",
  "pY": "0.21234562",
  "eR": "INSUFFICIENT_LIQUIDITY"
}
```
