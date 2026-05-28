---
title: "Individual Symbol Mini Ticker Stream"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Individual-Symbol-Mini-Ticker-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:38:53.980Z
---
# Individual Symbol Mini Ticker Stream

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Individual-Symbol-Mini-Ticker-Stream

# Individual Symbol Mini Ticker Stream

## Stream Description

24hr rolling window mini-ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.

## URL PATH

`/market`

## Stream Name

`<symbol>@miniTicker`

## Update Speed

**2s**

## Response Example

```json
{
  "e": "24hrMiniTicker",
  "E": 123456789,
  "s": "BTCUSDT",
  "c": "0.0025",
  "o": "0.0010",
  "h": "0.0025",
  "l": "0.0010",
  "v": "10000",
  "q": "18"
}
```
