---
title: "Diff. Book Depth Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Diff-Book-Depth-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:20.573Z
---
# Diff. Book Depth Streams

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Diff-Book-Depth-Streams>

# Diff. Book Depth Streams

## Stream Description

Bids and asks, pushed every 250 milliseconds, 500 milliseconds, 100 milliseconds (if existing)

## URL PATH

`/public`

## Stream Name

`<symbol>@depth` OR `<symbol>@depth@500ms` OR `<symbol>@depth@100ms`

**Note**:

> Retail Price Improvement(RPI) orders are not visible and excluded in the response message.

## Update Speed

**250ms**, **500ms**, **100ms**

## Response Example

```json
{
  "e": "depthUpdate",
  "E": 123456789,
  "T": 123456788,
  "s": "BTCUSDT",
  "U": 157,
  "u": 160,
  "pu": 149,
  "b": [
    [
      "0.0024",
      "10"
    ]
  ],
  "a": [
    [
      "0.0026",
      "100"
    ]
  ]
}
```
