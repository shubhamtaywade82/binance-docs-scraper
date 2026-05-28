---
title: "All Book Tickers Stream"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/All-Book-Tickers-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:08.502Z
---
# All Book Tickers Stream

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/All-Book-Tickers-Stream>

# All Book Tickers Stream

## Stream Description

Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.

## URL PATH

`/public`

## Stream Name

`!bookTicker`

**Note**:

> Retail Price Improvement(RPI) orders are not visible and excluded in the response message.

## Update Speed

**5s**

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
