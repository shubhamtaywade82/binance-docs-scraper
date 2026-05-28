---
title: "Kline/Candlestick Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Kline-Candlestick-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:43.772Z
---
# Kline/Candlestick Streams

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Kline-Candlestick-Streams>

# Kline/Candlestick Streams

## Stream Description

The Kline/Candlestick Stream push updates to the current klines/candlestick every 250 milliseconds (if existing).

**Kline/Candlestick chart intervals:** m -> minutes; h -> hours; d -> days; w -> weeks; M -> months

- 1m
- 3m
- 5m
- 15m
- 30m
- 1h
- 2h
- 4h
- 6h
- 8h
- 12h
- 1d
- 3d
- 1w
- 1M

## Stream Name

`<symbol>@kline_<interval>`

e.g. "btcusd\_200626@kline\_1m"

## Update Speed

**250ms**

## Response Example

```json
{
  "e": "kline",
  "E": 1591261542539,
  "s": "BTCUSD_200626",
  "k": {
    "t": 1591261500000,
    "T": 1591261559999,
    "s": "BTCUSD_200626",
    "i": "1m",
    "f": 606400,
    "L": 606430,
    "o": "9638.9",
    "c": "9639.8",
    "h": "9639.8",
    "l": "9638.6",
    "v": "156",
    "n": 31,
    "x": false,
    "q": "1.61836886",
    "V": "73",
    "Q": "0.75731156",
    "B": "0"
  }
}
```
