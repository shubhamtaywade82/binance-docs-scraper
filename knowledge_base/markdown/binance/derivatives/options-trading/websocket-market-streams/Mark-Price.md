---
title: "Mark Price"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Mark-Price
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:23.884Z
---
# Mark Price

> Source: <https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Mark-Price>

# Mark Price

## Stream Description

The mark price for all option symbols on specific underlying asset. E.g.[btcusdt@optionMarkPrice](wss://fstream.binance.com/market/stream?streams=btcusdt@optionMarkPrice)

## URL PATH

`/market`

## Stream Name

`<underlying>@optionMarkPrice`

## Update Speed

**1000ms**

## Response Example

```json
[
  {
    "s": "BTC-251120-126000-C",
    "mp": "770.543",
    "E": 1762867543321,
    "e": "markPrice",
    "i": "104334.60217391",
    "P": "0.000",
    "bo": "0.000",
    "ao": "900.000",
    "bq": "0.0000",
    "aq": "0.2000",
    "b": "-1.0",
    "a": "0.98161161",
    "hl": "924.652",
    "ll": "616.435",
    "vo": "0.9408058",
    "rf": "0.0",
    "d": "0.11111964",
    "t": "-164.26702615",
    "g": "0.00001245",
    "v": "30.63855919"
  },
  {
    "s": "BTC-251123-126000-C",
    "mp": "1249.61",
    "E": 1762867543321,
    "e": "markPrice",
    "i": "104334.60217391",
    "P": "0.000",
    "bo": "1200.000",
    "ao": "1300.000",
    "bq": "0.3000",
    "aq": "0.6000",
    "b": "0.92159033",
    "a": "0.94461441",
    "hl": "1499.533",
    "ll": "999.688",
    "vo": "0.93310237",
    "rf": "0.0",
    "d": "0.14869196",
    "t": "-172.12148811",
    "g": "0.00001326",
    "v": "43.43627792"
  }
]
```
