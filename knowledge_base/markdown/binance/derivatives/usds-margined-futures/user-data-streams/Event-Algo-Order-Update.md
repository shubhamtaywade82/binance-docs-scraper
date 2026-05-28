---
title: "Event: Algo Order Update"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Algo-Order-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:44:20.409Z
---
# Event: Algo Order Update

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Algo-Order-Update

# Event: Algo Order Update

## Event Description

When new algo order created, order status changed will push such event. event type is `ALGO_UPDATE`.

**Algo Status**

-   `NEW`: This status indicates that the conditional order was successfully placed into the Algo Service but has not yet been triggered.
-   `CANCELED`: This status signifies that the conditional order has been canceled.
-   `TRIGGERING`: This status suggests that the order has met the triggering condition and has been forwarded to the matching engine.
-   `TRIGGERED`: This status means that the order has been successfully placed into the matching engine.
-   `FINISHED`: This status shows that the triggered conditional order has been filled or canceled in the matching engine.
-   `REJECTED`: This status signifies that the conditional order has been denied by the matching engine, such as in scenarios of margin check failures.
-   `EXPIRED`: This status denotes that the conditional order has been canceled by the system. An example would be when a user places a GTE\_GTC Time-In-Force conditional order but then closes all positions on that symbol, resulting in system-led cancellation of the conditional order.

## URL PATH

`/private`

## Event Name

`ALGO_UPDATE`

## Response Example

```json
{
  "e": "ALGO_UPDATE",
  "T": 1750515742297,
  "E": 1750515742303,
  "o": {
    "caid": "Q5xaq5EGKgXXa0fD7fs0Ip",
    "aid": 2148719,
    "at": "CONDITIONAL",
    "o": "TAKE_PROFIT",
    "s": "BNBUSDT",
    "S": "SELL",
    "ps": "BOTH",
    "f": "GTC",
    "q": "0.01",
    "X": "CANCELED",
    "ai": "",
    "ap": "0.00000",
    "aq": "0.00000",
    "act": "0",
    "tp": "750",
    "p": "750",
    "V": "EXPIRE_MAKER",
    "wt": "CONTRACT_PRICE",
    "pm": "NONE",
    "cp": false,
    "pP": false,
    "R": false,
    "tt": 0,
    "gtd": 0,
    "rm": "Reduce Only reject"
  }
}
```
