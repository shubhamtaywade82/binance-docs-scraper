---
title: "Mark Price Kline/Candlestick Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-Kline-Candlestick-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:55.148Z
---
# Mark Price Kline/Candlestick Streams

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-Kline-Candlestick-Streams

# Mark Price Kline/Candlestick Streams

## Stream Description

Mark Price Kline/Candlestick Streams

**Kline/Candlestick chart intervals:**

m -> minutes; h -> hours; d -> days; w -> weeks; M -> months

-   1m
-   3m
-   5m
-   15m
-   30m
-   1h
-   2h
-   4h
-   6h
-   8h
-   12h
-   1d
-   3d
-   1w
-   1M

## Stream Name

`<symbol>@markPriceKline_<interval>`

e.g. "btcusd\_200626@markPriceKline\_1m"

## Update Speed

**250ms**

## Response Example

```json
{
  "e": "markPrice_kline",
  "E": 1591267398004,
  "ps": "BTCUSD",
  "k": {
    "t": 1591267380000,
    "T": 1591267439999,
    "s": "BTCUSD_200626",
    "i": "1m",
    "f": 1591267380000,
    "L": 1591267398000,
    "o": "9539.67161333",
    "c": "9540.82761333",
    "h": "9540.82761333",
    "l": "9539.66961333",
    "v": "0",
    "n": 19,
    "x": false,
    "q": "0",
    "V": "0",
    "Q": "0",
    "B": "0"
  }
}
```
