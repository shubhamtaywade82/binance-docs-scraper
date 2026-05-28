---
title: "Index Kline/Candlestick Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Index-Kline-Candlestick-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:52.226Z
---
# Index Kline/Candlestick Streams

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Index-Kline-Candlestick-Streams

# Index Kline/Candlestick Streams

## Stream Description

Index Kline/Candlestick Streams

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

`<pair>@indexPriceKline_<interval>`

e.g. "btcusd@indexPriceKline\_1m"

## Update Speed

**250ms**

## Response Example

```json
{
  "e": "indexPrice_kline",
  "E": 1591267070033,
  "ps": "BTCUSD",
  "k": {
    "t": 1591267020000,
    "T": 1591267079999,
    "s": "0",
    "i": "1m",
    "f": 1591267020000,
    "L": 1591267070000,
    "o": "9542.21900000",
    "c": "9542.50440000",
    "h": "9542.71640000",
    "l": "9542.21040000",
    "v": "0",
    "n": 51,
    "x": false,
    "q": "0",
    "V": "0",
    "Q": "0",
    "B": "0"
  }
}
```
