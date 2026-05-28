---
title: "Individual Symbol Book Ticker Streams"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Book-Ticker-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:45:07.515Z
---
# Individual Symbol Book Ticker Streams

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Individual-Symbol-Book-Ticker-Streams>

# Individual Symbol Book Ticker Streams

## Stream Description

Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.

## Stream Name

`<symbol>@bookTicker`

## Update Speed

**Real-time**

## Response Example

```json
{
  "e": "bookTicker",
  "u": 17242169,
  "s": "BTCUSD_200626",
  "b": "9548.1",
  "B": "52",
  "a": "9548.5",
  "A": "11",
  "T": 1591268628155,
  "E": 1591268628166,
  "ps": "BTCUSD"
}
```
