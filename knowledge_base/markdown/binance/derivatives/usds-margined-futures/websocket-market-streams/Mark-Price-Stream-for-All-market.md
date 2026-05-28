---
title: "Mark Price Stream for All market"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Mark-Price-Stream-for-All-market
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:38:45.537Z
---
# Mark Price Stream for All market

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Mark-Price-Stream-for-All-market

# Mark Price Stream for All market

## Stream Description

Mark price and funding rate for all symbols pushed every 3 seconds or every second.

**Note**:

> TradFi symbols will be pushed through a seperate message.

## URL PATH

`/market`

## Stream Name

`!markPrice@arr` or `!markPrice@arr@1s`

## Update Speed

**3000ms** or **1000ms**

## Response Example

```json
[
  {
    "e": "markPriceUpdate",
    "E": 1562305380000,
    "s": "BTCUSDT",
    "p": "11185.87786614",
    "ap": "11185.87786614",
    "i": "11784.62659091",
    "P": "11784.25641265",
    "r": "0.00030000",
    "T": 1562306400000
  }
]
```
