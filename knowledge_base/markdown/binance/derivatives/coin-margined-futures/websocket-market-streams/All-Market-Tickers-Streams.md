---
title: "All Market Tickers Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Market-Tickers-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:45:04.963Z
---
# All Market Tickers Streams

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/All-Market-Tickers-Streams

# All Market Tickers Streams

## Stream Description

24hr rolling window ticker statistics for all symbols. These are NOT the statistics of the UTC day, but a 24hr rolling window from requestTime to 24hrs before. Note that only tickers that have changed will be present in the array.

## Stream Name

`!ticker@arr`

## Update Speed

**1000ms**

## Response Example

```json
[
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
]
```
