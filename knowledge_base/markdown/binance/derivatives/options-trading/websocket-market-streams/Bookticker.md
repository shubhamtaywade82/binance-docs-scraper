---
title: "Individual Symbol Book Ticker Streams"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Bookticker
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:32.713Z
---
# Individual Symbol Book Ticker Streams

> Source: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Bookticker

# Individual Symbol Book Ticker Streams

## Stream Description

Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.

## URL PATH

`/public`

## Stream Name

`<symbol>@bookTicker`

## Update Speed

**Real-Time**

## Response Example

```json
{
  "e": "bookTicker",
  "u": 2472,
  "s": "BTC-251226-110000-C",
  "b": "5000.000",
  "B": "0.2000",
  "a": "5100.000",
  "A": "0.1000",
  "T": 1763041762942,
  "E": 1763041762942
}
```
