---
title: "Event: Greek Update"
url: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Greek-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:53:35.834Z
---
# Event: Greek Update

> Source: https://developers.binance.com/docs/derivatives/options-trading/user-data-streams/Event-Greek-Update

# Event: Greek Update

## Event Description

`GREEK_UPDATE` will be triggered when a position changes or periodically every 10 seconds when having position.

## URL PATH

`/private`

## Event Name

`GREEK_UPDATE`

## Response Example

```json
{
  "e": "GREEK_UPDATE",
  "E": 1762917544216,
  "T": 1762917544216,
  "G": [
    {
      "u": "BTCUSDT",
      "d": "-0.01304097",
      "g": "-0.00000124",
      "t": "16.11648100",
      "v": "-3.83444011"
    }
  ]
}
```
