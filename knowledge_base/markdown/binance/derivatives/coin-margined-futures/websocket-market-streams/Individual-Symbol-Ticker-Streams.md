---
title: "Individual Symbol Ticker Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Ticker-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:45:02.406Z
---
# Individual Symbol Ticker Streams

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Ticker-Streams>

# Individual Symbol Ticker Streams

## Stream Description

24hr rolling window ticker statistics for a single symbol. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before.

## Stream Name

`<symbol>@ticker`

## Update Speed

**500ms**

## Response Example

```json
{
  "e": "24hrTicker",
  "E": 1591268262453,
  "s": "BTCUSD_200626",
  "p": "-43.4",
  "P": "-0.452",
  "w": "0.00147974",
  "c": "9548.5",
  "Q": "2",
  "o": "9591.9",
  "h": "10000.0",
  "l": "7000.0",
  "v": "487850",
  "q": "32968676323.46222700",
  "O": 1591181820000,
  "C": 1591268262442,
  "F": 512014,
  "L": 615289,
  "n": 103272,
  "ps": "BTCUSD"
}
```
