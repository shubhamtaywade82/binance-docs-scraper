---
title: "Mark Price Stream"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Mark-Price-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:38:42.825Z
---
# Mark Price Stream

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Mark-Price-Stream>

# Mark Price Stream

## Stream Description

Mark price and funding rate for a single symbol pushed every 3 seconds or every second.

## URL PATH

`/market`

## Stream Name

`<symbol>@markPrice` or `<symbol>@markPrice@1s`

## Update Speed

**3000ms** or **1000ms**

## Response Example

```json
{
  "e": "markPriceUpdate",
  "E": 1562305380000,
  "s": "BTCUSDT",
  "p": "11794.15000000",
  "ap": "11794.15000000",
  "i": "11784.62659091",
  "P": "11784.25641265",
  "r": "0.00038167",
  "T": 1562306400000
}
```
