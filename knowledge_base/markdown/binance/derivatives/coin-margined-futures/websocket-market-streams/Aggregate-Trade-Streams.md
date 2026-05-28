---
title: "Aggregate Trade Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Aggregate-Trade-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:35.046Z
---
# Aggregate Trade Streams

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Aggregate-Trade-Streams>

# Aggregate Trade Streams

## Stream Description

The Aggregate Trade Streams push market trade information that is aggregated for fills with same price and taking side every 100 milliseconds.

## Stream Name

`<symbol>@aggTrade`

## Update Speed

**100ms**

## Response Example

```json
{
  "e": "aggTrade",
  "E": 1591261134288,
  "a": 424951,
  "s": "BTCUSD_200626",
  "p": "9643.5",
  "q": "2",
  "f": 606073,
  "l": 606073,
  "T": 1591261134199,
  "m": false
}
```
