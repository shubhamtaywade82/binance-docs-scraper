---
title: "Trade Streams"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Trade-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:38.065Z
---
# Trade Streams

> Source: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Trade-Streams

# Trade Streams

## Stream Description

The Trade Streams push raw trade information for specific symbol or underlying asset. E.g.[btcusdt@optionTrade](wss://fstream.binance.com/public/stream?streams=btcusdt@optionTrade)

## URL PATH

`/public`

## Stream Name

`<symbol>@optionTrade` or `<underlying>@optionTrade`

## Update Speed

**50ms**

## Response Example

```json
{
  "e": "trade",
  "E": 1762856064204,
  "T": 1762856064203,
  "s": "BTC-251123-126000-C",
  "t": 4,
  "p": "1300.000",
  "q": "0.1000",
  "X": "MARKET",
  "S": "BUY",
  "m": false
}
```
