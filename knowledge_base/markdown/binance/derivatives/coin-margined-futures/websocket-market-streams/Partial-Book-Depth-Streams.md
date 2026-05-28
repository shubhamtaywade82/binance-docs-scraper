---
title: "Partial Book Depth Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Partial-Book-Depth-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:45:21.603Z
---
# Partial Book Depth Streams

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Partial-Book-Depth-Streams>

# Partial Book Depth Streams

## Stream Description

Top **<levels>** bids and asks, Valid **<levels>** are 5, 10, or 20.

## Stream Name

`<symbol>@depth<levels>` OR `<symbol>@depth<levels>@500ms` OR `<symbol>@depth<levels>@100ms`.

## Update Speed

**250ms**, **500ms** or **100ms**

## Response Example

```json
{
  "e": "depthUpdate",
  "E": 1591269996801,
  "T": 1591269996646,
  "s": "BTCUSD_200626",
  "ps": "BTCUSD",
  "U": 17276694,
  "u": 17276701,
  "pu": 17276678,
  "b": [
    [
      "9523.0",
      "5"
    ],
    [
      "9522.8",
      "8"
    ],
    [
      "9522.6",
      "2"
    ],
    [
      "9522.4",
      "1"
    ],
    [
      "9522.0",
      "5"
    ]
  ],
  "a": [
    [
      "9524.6",
      "2"
    ],
    [
      "9524.7",
      "3"
    ],
    [
      "9524.9",
      "16"
    ],
    [
      "9525.1",
      "10"
    ],
    [
      "9525.3",
      "6"
    ]
  ]
}
```
