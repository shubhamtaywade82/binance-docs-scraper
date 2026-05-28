---
title: "New Symbol Info"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/New-Symbol-Info
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:18.422Z
---
# New Symbol Info

> Source: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/New-Symbol-Info

# New Symbol Info

## Stream Description

New symbol listing stream.

## URL PATH

`/market`

## Stream Name

`!optionSymbol`

## Update Speed

**50ms**  

## Response Example

```json
{
  "e": "optionSymbol",
  "E": 1669356423908,
  "s": "BTC-250926-140000-C",
  "ps": "BTCUSDT",
  "qa": "USDT",
  "d": "CALL",
  "sp": "21000",
  "dt": 4133404800000,
  "u": 1,
  "ot": 1569398400000,
  "cs": "TRADING"
}
```
