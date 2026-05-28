---
title: "Individual Symbol Mini Ticker Stream"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Mini-Ticker-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:57.857Z
---
# Individual Symbol Mini Ticker Stream

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Mini-Ticker-Stream>

# Individual Symbol Mini Ticker Stream

## Stream Description

24hr rolling window mini-ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.

## Stream Name

`<symbol>@miniTicker`

## Update Speed

**500ms**

## Response Example

```json
{
  "e": "24hrMiniTicker",
  "E": 1591267704450,
  "s": "BTCUSD_200626",
  "ps": "BTCUSD",
  "c": "9561.7",
  "o": "9580.9",
  "h": "10000.0",
  "l": "7000.0",
  "v": "487476",
  "q": "33264343847.22378500"
}
```
