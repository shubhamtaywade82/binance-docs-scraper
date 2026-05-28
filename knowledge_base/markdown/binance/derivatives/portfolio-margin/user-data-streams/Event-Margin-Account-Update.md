---
title: "Event: Margin Account Update"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Margin-Account-Update
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:47:22.557Z
---
# Event: Margin Account Update

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/user-data-streams/Event-Margin-Account-Update>

# Event: Margin Account Update

## Event Description

`outboundAccountPosition` is sent any time an account balance has changed and contains the assets that were possibly changed by the event that generated the balance change.

## Event Name

`outboundAccountPosition`

## Response Example

```json
{
  "e": "outboundAccountPosition",
  "E": 1564034571105,
  "u": 1564034571073,
  "U": 1027053479517,
  "B": [
    {
      "a": "ETH",
      "f": "10000.000000",
      "l": "0.000000"
    }
  ]
}
```
