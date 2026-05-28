---
title: "Partial Book Depth Streams"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Partial-Book-Depth-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:40.579Z
---
# Partial Book Depth Streams

> Source: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Partial-Book-Depth-Streams

# Partial Book Depth Streams

## Stream Description

Top **<levels>** bids and asks, Valid levels are **<levels>** are 5, 10, 20.

## URL PATH

`/public`

## Stream Name

`<symbol>@depth<level>@100ms` or `<symbol>@depth<level>@500ms`

## Update Speed

**100ms** or **500ms**

## Response Example

```json
{
  "e": "depthUpdate",
  "E": 1762866729459,
  "T": 1762866729358,
  "s": "BTC-251123-126000-C",
  "U": 465,
  "u": 465,
  "pu": 464,
  "b": [
    [
      "1100.000",
      "0.6000"
    ]
  ],
  "a": [
    [
      "1300.000",
      "0.6000"
    ]
  ]
}
```
