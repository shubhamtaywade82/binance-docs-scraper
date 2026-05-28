---
title: "Index Price Stream"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Index-Price-Stream
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:44:37.686Z
---
# Index Price Stream

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/websocket-market-streams/Index-Price-Stream>

# Index Price Stream

## Stream Description

Index Price Stream

## Stream Name

`<pair>@indexPrice` OR `<pair>@indexPrice@1s`

## Update Speed

**3000ms** OR **1000ms**

## Response Example

```
  {

    "e": "indexPriceUpdate",  // Event type

    "E": 1591261236000,       // Event time

    "i": "BTCUSD",            // Pair

    "p": "9636.57860000",     // Index Price

  }

```
