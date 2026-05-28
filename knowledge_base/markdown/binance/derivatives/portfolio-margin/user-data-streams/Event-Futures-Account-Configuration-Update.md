---
title: "Event: Futures Account Configuration Update(Leverage Update)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Futures-Account-Configuration-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:37.410Z
---
# Event: Futures Account Configuration Update(Leverage Update)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Futures-Account-Configuration-Update>

# Event: Futures Account Configuration Update(Leverage Update)

## Event Description

When the account configuration is changed, the event type will be pushed as `ACCOUNT_CONFIG_UPDATE` When the leverage of a trade pair changes, the payload will contain the object `ac` to represent the account configuration of the trade pair, where `s` represents the specific trade pair and `l` represents the leverage.

## Event Name

`ACCOUNT_CONFIG_UPDATE`

## Response Example

```json
{
  "e": "ACCOUNT_CONFIG_UPDATE",
  "fs": "UM",
  "E": 1611646737479,
  "T": 1611646737476,
  "ac": {
    "s": "BTCUSD_PERP",
    "l": 25
  }
}
```
