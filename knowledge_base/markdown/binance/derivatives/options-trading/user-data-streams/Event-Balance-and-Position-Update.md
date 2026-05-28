---
title: "Event: Balance and Position Update"
url: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Balance-and-Position-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:55:11.739Z
---
# Event: Balance and Position Update

> Source: <https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Balance-and-Position-Update>

# Event: Balance and Position Update

## Event Description

Event type is `ACCOUNT_UPDATE`.

- When balance or position get updated, this event will be pushed.

  - `ACCOUNT_UPDATE` will be pushed only when update happens on user's account, including changes on balances, positions.
  - Unfilled orders or cancelled orders will not make the event `ACCOUNT_UPDATE` pushed, since there's no change on positions.
  - "position" in `ACCOUNT_UPDATE`: Only symbols of changed positions will be pushed.
- The field "m" represents the reason type for the event and may shows the following possible types:

  - DEPOSIT
  - WITHDRAW
  - ORDER
- The field "bc" represents the balance change except for PnL and commission.

## Event Name

`BALANCE_POSITION_UPDATE`

## Response Example

```json
{
  "e": "BALANCE_POSITION_UPDATE",
  "E": 1762917544216,
  "T": 1762917544206,
  "m": "ORDER",
  "B": [
    {
      "a": "USDT",
      "b": "10000471.37940900",
      "bc": "0"
    }
  ],
  "P": [
    {
      "s": "BTC-251123-126000-C",
      "c": "-0.1000",
      "p": "-120.00000000",
      "a": "1200.00000000"
    }
  ]
}
```
