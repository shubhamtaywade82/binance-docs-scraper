---
title: "Index Price Streams"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Index-Price-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:30.125Z
---
# Index Price Streams

> Source: <https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Index-Price-Streams>

# Index Price Streams

## Stream Description

Underlying(e.g ETHUSDT) index stream.

## URL PATH

`/market`

**Stream Name:**  
`!index@arr`

## Update Speed

**1000ms**

## Response Example

```json
[
  {
    "e": "indexPrice",
    "E": 1763092572229,
    "s": "ETHUSDT",
    "p": "3224.51976744"
  },
  {
    "e": "indexPrice",
    "E": 1763092572229,
    "s": "BTCUSDT",
    "p": "99102.32326087"
  }
]
```
