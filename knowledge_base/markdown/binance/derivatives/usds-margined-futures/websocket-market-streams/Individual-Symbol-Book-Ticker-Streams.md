---
title: "Individual Symbol Book Ticker Streams"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Individual-Symbol-Book-Ticker-Streams
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:05.651Z
---
# Individual Symbol Book Ticker Streams

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Individual-Symbol-Book-Ticker-Streams

# Individual Symbol Book Ticker Streams

## Stream Description

Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.

## URL PATH

`/public`

## Stream Name

`<symbol>@bookTicker`

**Note**:

> Retail Price Improvement(RPI) orders are not visible and excluded in the response message.

## Update Speed

**Real-time**

## Response Example

```json
{
  "e": "bookTicker",
  "u": 400900217,
  "E": 1568014460893,
  "T": 1568014460891,
  "s": "BNBUSDT",
  "b": "25.35190000",
  "B": "31.21000000",
  "a": "25.36520000",
  "A": "40.66000000"
}
```
