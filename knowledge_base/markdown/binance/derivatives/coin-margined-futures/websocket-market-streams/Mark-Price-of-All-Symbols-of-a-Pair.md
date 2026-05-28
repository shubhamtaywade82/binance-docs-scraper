---
title: "Mark Price of All Symbols of a Pair"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-of-All-Symbols-of-a-Pair
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:49.376Z
---
# Mark Price of All Symbols of a Pair

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-of-All-Symbols-of-a-Pair>

# Mark Price of All Symbols of a Pair

## Stream Description

Mark Price of All Symbols of a Pair

## Stream Name

`<pair>@markPrice` OR `<pair>@markPrice@1s`

## Update Speed

**3000ms** OR **1000ms**

## Response Example

```json
[
  {
    "e": "markPriceUpdate",
    "E": 1596095725000,
    "s": "BTCUSD_201225",
    "p": "10934.62615417",
    "P": "10962.17178236",
    "i": "10933.62615417",
    "r": "",
    "T": 0
  },
  {
    "e": "markPriceUpdate",
    "E": 1596095725000,
    "s": "BTCUSD_PERP",
    "p": "11012.31359011",
    "P": "10962.17178236",
    "i": "10933.62615417",
    "r": "0.00000000",
    "T": 1596096000000
  }
]
```
