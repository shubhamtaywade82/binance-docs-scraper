---
title: "RPI Diff. Book Depth Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Diff-Book-Depth-Streams-RPI
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:23.431Z
---
# RPI Diff. Book Depth Streams

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Diff-Book-Depth-Streams-RPI

# RPI Diff. Book Depth Streams

## Stream Description

Bids and asks including RPI orders, pushed every 500 milliseconds

## URL PATH

`/public`

## Stream Name

`<symbol>@rpiDepth@500ms`

**Note**:

> RPI(Retail Price Improvement) orders are included and aggreated in the response message. When the quantity of a price level to be updated is equal to 0, it means either all quotations for this price have been filled/canceled, or the quantity of crossed RPI orders for this price are hidden

## Update Speed

**500ms**

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
