---
title: "Composite Index Symbol Information Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Composite-Index-Symbol-Information-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:29.021Z
---
# Composite Index Symbol Information Streams

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Composite-Index-Symbol-Information-Streams>

# Composite Index Symbol Information Streams

## Stream Description

Composite index information for index symbols pushed every second.

## URL PATH

`/market`

## Stream Name

`<symbol>@compositeIndex`

## Update Speed

**1000ms**

## Response Example

```json
{
  "e": "compositeIndex",
  "E": 1602310596000,
  "s": "DEFIUSDT",
  "p": "554.41604065",
  "C": "baseAsset",
  "c": [
    {
      "b": "BAL",
      "q": "USDT",
      "w": "1.04884844",
      "W": "0.01457800",
      "i": "24.33521021"
    },
    {
      "b": "BAND",
      "q": "USDT",
      "w": "3.53782729",
      "W": "0.03935200",
      "i": "7.26420084"
    }
  ]
}
```
