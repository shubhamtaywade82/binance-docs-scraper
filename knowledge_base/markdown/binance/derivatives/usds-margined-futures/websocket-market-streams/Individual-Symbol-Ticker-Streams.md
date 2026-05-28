---
title: "Individual Symbol Ticker Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Individual-Symbol-Ticker-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:38:59.661Z
---
# Individual Symbol Ticker Streams

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Individual-Symbol-Ticker-Streams>

# Individual Symbol Ticker Streams

## Stream Description

24hr rolling window ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.

## URL PATH

`/market`

## Stream Name

`<symbol>@ticker`

## Update Speed

**2000ms**

## Response Example

```json
{
  "e": "24hrTicker",
  "E": 123456789,
  "s": "BTCUSDT",
  "p": "0.0015",
  "P": "250.00",
  "w": "0.0018",
  "c": "0.0025",
  "Q": "10",
  "o": "0.0010",
  "h": "0.0025",
  "l": "0.0010",
  "v": "10000",
  "q": "18",
  "O": 0,
  "C": 86400000,
  "F": 0,
  "L": 18150,
  "n": 18151
}
```
