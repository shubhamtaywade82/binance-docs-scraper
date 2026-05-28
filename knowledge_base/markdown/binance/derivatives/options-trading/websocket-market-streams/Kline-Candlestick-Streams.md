---
title: "Kline/Candlestick Streams"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Kline-Candlestick-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:26.824Z
---
# Kline/Candlestick Streams

> Source: <https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Kline-Candlestick-Streams>

# Kline/Candlestick Streams

## Stream Description

The Kline/Candlestick Stream push updates to the current klines/candlestick every 1000 milliseconds (if existing).

**Kline/Candlestick chart intervals:**

m -> minutes; h -> hours; d -> days; w -> weeks; M -> months

"1m", "3m", "5m", "15m" "30m" "1h", "2h", "4h", "6h", "12h", "1d", "3d", "1w",

## URL PATH

`/market`

## Stream Name

`<symbol>@kline_<interval>`

## Update Speed

**1000ms**

## Response Example

```json
{
  "e": "kline",
  "E": 1638747660000,
  "s": "BTC-200630-9000-P",
  "k": {
    "t": 1638747660000,
    "T": 1638747719999,
    "s": "BTC-200630-9000-P",
    "i": "1m",
    "f": 0,
    "L": 0,
    "o": "1000",
    "c": "1000",
    "h": "1000",
    "l": "1000",
    "v": "0",
    "n": 0,
    "x": false,
    "q": "0",
    "V": "0",
    "Q": "0"
  }
}
```
