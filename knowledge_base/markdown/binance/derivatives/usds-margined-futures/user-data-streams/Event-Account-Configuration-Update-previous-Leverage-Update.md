---
title: "Event: Account Configuration Update previous Leverage Update"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Account-Configuration-Update-previous-Leverage-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:44:09.267Z
---
# Event: Account Configuration Update previous Leverage Update

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/user-data-streams/Event-Account-Configuration-Update-previous-Leverage-Update

# Event: Account Configuration Update previous Leverage Update

## Event Description

When the account configuration is changed, the event type will be pushed as `ACCOUNT_CONFIG_UPDATE` When the leverage of a trade pair changes, the payload will contain the object `ac` to represent the account configuration of the trade pair, where `s` represents the specific trade pair and `l` represents the leverage When the user Multi-Assets margin mode changes the payload will contain the object `ai` representing the user account configuration, where `j` represents the user Multi-Assets margin mode

## URL PATH

`/private`

## Event Name

`ACCOUNT_CONFIG_UPDATE`

## Response Example

> **Payload:**

```json
{
  "e": "ACCOUNT_CONFIG_UPDATE",
  "E": 1611646737479,
  "T": 1611646737476,
  "ac": {
    "s": "BTCUSDT",
    "l": 25
  }
}
```

> **Or**

```json
{
  "e": "ACCOUNT_CONFIG_UPDATE",
  "E": 1611646737479,
  "T": 1611646737476,
  "ai": {
    "j": true
  }
}
```
