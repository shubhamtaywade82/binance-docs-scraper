---
title: "Event: OpenOrderLoss Update"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-OpenOrderLoss-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:19.491Z
---
# Event: OpenOrderLoss Update

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-OpenOrderLoss-Update

# Event: OpenOrderLoss Update

## Event Description

Cross margin order margin stream

## Event Name

`openOrderLoss`

## Response Example

```json
{
  "e": "openOrderLoss",
  "E": 1678710578788,
  "O": [
    {
      "a": "BUSD",
      "o": "-0.1232313"
    },
    {
      "a": "BNB",
      "o": "-12.1232313"
    }
  ]
}
```
