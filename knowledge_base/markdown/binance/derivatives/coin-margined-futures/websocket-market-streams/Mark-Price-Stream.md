---
title: "Mark Price Stream"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:40.891Z
---
# Mark Price Stream

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Mark-Price-Stream>

# Mark Price Stream

## Stream Description

Mark price update stream

## Stream Name

`<symbol>@markPrice` OR `<symbol>@markPrice@1s`

## Update Speed

**3000ms** OR **1000ms**

## Response Example

```json
{
  "e": "markPriceUpdate",
  "E": 1596095725000,
  "s": "BTCUSD_201225",
  "p": "10934.62615417",
  "P": "10962.17178236",
  "i": "10933.62615417",
  "r": "",
  "T": 0
}
```
