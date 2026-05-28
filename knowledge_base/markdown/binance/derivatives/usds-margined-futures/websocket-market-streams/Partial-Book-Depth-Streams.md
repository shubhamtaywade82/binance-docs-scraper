---
title: "Partial Book Depth Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Partial-Book-Depth-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:17.479Z
---
# Partial Book Depth Streams

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Partial-Book-Depth-Streams

# Partial Book Depth Streams

## Stream Description

Top **<levels>** bids and asks, Valid **<levels>** are 5, 10, or 20.

## URL PATH

`/public`

## Stream Name

`<symbol>@depth<levels>` OR `<symbol>@depth<levels>@500ms` OR `<symbol>@depth<levels>@100ms`.

**Note**:

> Retail Price Improvement(RPI) orders are not visible and excluded in the response message.

## Update Speed

**250ms**, **500ms** or **100ms**

## Response Example

```json
{
  "e": "depthUpdate",
  "E": 1571889248277,
  "T": 1571889248276,
  "s": "BTCUSDT",
  "U": 390497796,
  "u": 390497878,
  "pu": 390497794,
  "b": [
    [
      "7403.89",
      "0.002"
    ],
    [
      "7403.90",
      "3.906"
    ],
    [
      "7404.00",
      "1.428"
    ],
    [
      "7404.85",
      "5.239"
    ],
    [
      "7405.43",
      "2.562"
    ]
  ],
  "a": [
    [
      "7405.96",
      "3.340"
    ],
    [
      "7406.63",
      "4.525"
    ],
    [
      "7407.08",
      "2.475"
    ],
    [
      "7407.15",
      "4.800"
    ],
    [
      "7407.20",
      "0.175"
    ]
  ]
}
```
