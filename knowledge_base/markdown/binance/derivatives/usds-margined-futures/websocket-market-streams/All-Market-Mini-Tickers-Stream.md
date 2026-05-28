---
title: "All Market Mini Tickers Stream"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/All-Market-Mini-Tickers-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:02.505Z
---
# All Market Mini Tickers Stream

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/All-Market-Mini-Tickers-Stream

# All Market Mini Tickers Stream

## Stream Description

24hr rolling window mini-ticker statistics for all symbols. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before. Note that only tickers that have changed will be present in the array.

## URL PATH

`/market`

## Stream Name

`!miniTicker@arr`

## Update Speed

**1000ms**

## Response Example

```json
[
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
]
```
