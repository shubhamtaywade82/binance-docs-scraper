---
title: "Multi-Assets Mode Asset Index"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Multi-Assets-Mode-Asset-Index
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:39:34.923Z
---
# Multi-Assets Mode Asset Index

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/websocket-market-streams/Multi-Assets-Mode-Asset-Index

# Multi-Assets Mode Asset Index

## Stream Description

Asset index for multi-assets mode user

## URL PATH

`/market`

## Stream Name

`!assetIndex@arr` OR `<assetSymbol>@assetIndex`

## Update Speed

**1s**

## Response Example

```json
[
  {
    "e": "assetIndexUpdate",
    "E": 1686749230000,
    "s": "ADAUSD",
    "i": "0.27462452",
    "b": "0.10000000",
    "a": "0.10000000",
    "B": "0.24716207",
    "A": "0.30208698",
    "q": "0.05000000",
    "g": "0.05000000",
    "Q": "0.26089330",
    "G": "0.28835575"
  },
  {
    "e": "assetIndexUpdate",
    "E": 1686749230000,
    "s": "USDTUSD",
    "i": "0.99987691",
    "b": "0.00010000",
    "a": "0.00010000",
    "B": "0.99977692",
    "A": "0.99997689",
    "q": "0.00010000",
    "g": "0.00010000",
    "Q": "0.99977692",
    "G": "0.99997689"
  }
]
```
