---
title: "Open Interest"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Open-Interest
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:20.891Z
---
# Open Interest

> Source: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/Open-Interest

# Open Interest

## Stream Description

Option open interest for specific underlying asset on specific expiration date. E.g.[ethusdt@openInterest@221125](wss://fstream.binance.com/market/stream?streams=ethusdt@openInterest@221125)

## URL PATH

`/market`

## Stream Name

`underlying@optionOpenInterest@<expirationDate>`

## Update Speed

**60s**

## Response Example

```json
[
  {
    "e": "openInterest",
    "E": 1668759300045,
    "s": "ETH-221125-2700-C",
    "o": "1580.87",
    "h": "1912992.178168204"
  }
]
```
