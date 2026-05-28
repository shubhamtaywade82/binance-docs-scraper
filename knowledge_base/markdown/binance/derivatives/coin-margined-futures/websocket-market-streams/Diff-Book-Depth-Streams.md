---
title: "Diff. Book Depth Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Diff-Book-Depth-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:45:24.063Z
---
# Diff. Book Depth Streams

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Diff-Book-Depth-Streams

# Diff. Book Depth Streams

## Stream Description

Bids and asks, pushed every 250 milliseconds, 500 milliseconds, or 100 milliseconds

## Stream Name

`<symbol>@depth` OR `<symbol>@depth@500ms` OR `<symbol>@depth@100ms`

## Update Speed

**250ms** or **500ms** or **100ms**

## Response Example

```json
{
  "e": "depthUpdate",
  "E": 1591270260907,
  "T": 1591270260891,
  "s": "BTCUSD_200626",
  "ps": "BTCUSD",
  "U": 17285681,
  "u": 17285702,
  "pu": 17285675,
  "b": [
    [
      "9517.6",
      "10"
    ]
  ],
  "a": [
    [
      "9518.5",
      "45"
    ]
  ]
}
```
