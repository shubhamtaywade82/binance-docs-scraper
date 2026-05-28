---
title: "Event: Account data"
url: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Account-data
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:55:08.923Z
---
# Event: Account data

> Source: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Account-data

# Event: Account data

## Event Description

-   Update under the following conditions:
    -   Account deposit or withdrawal
    -   Position info change
    -   Periodic update every 10s when having position

## URL PATH

`/private`

## Event Name

`ACCOUNT_UPDATE`

## Update Speed

**50ms**

## Response Example

```json
{
  "stream": "89ljxuL6jFTN3Ej85aYOqH2BYXQ7eeuNYcGm7ktV",
  "data": {
    "e": "ACCOUNT_UPDATE",
    "E": 1762914568643,
    "T": 1762914568619,
    "eq": "10000371.61462086",
    "aeq": "10000475.51032086",
    "b": "10000475.51032086",
    "m": "-103.89570000",
    "u": "16.10430000",
    "i": "32354.38562539",
    "M": "6089.28766956"
  }
}
```
