---
title: "Trading Session Stream"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Trading-Session-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:37.834Z
---
# Trading Session Stream

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Trading-Session-Stream>

# Trading Session Stream

## Stream Description

Trading session information for the underlying assets of TradFi Perpetual contracts—covering the U.S. equity market and the commodity market—is updated every second. Trading session information for different underlying markets is pushed in separate messages. Session types for the equity market include "PRE\_MARKET", "REGULAR", "AFTER\_MARKET", "OVERNIGHT", and "NO\_TRADING". Session types for the commodity market include "REGULAR" and "NO\_TRADING".

## URL PATH

`/market`

## Stream Name

`tradingSession`

## Update Speed

**1s**

## Response Example

```json
{
  "e": "EquityUpdate",
  "E": 1765244143062,
  "t": 1765242000000,
  "T": 1765270800000,
  "S": "OVERNIGHT"
}
```
