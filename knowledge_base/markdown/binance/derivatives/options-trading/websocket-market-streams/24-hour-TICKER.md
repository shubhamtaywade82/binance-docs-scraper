---
title: "24-hour TICKER"
url: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/24-hour-TICKER
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:59:35.440Z
---
# 24-hour TICKER

> Source: https://developers.binance.com/docs/derivatives/options-trading/websocket-market-streams/24-hour-TICKER

# 24-hour TICKER

## Stream Description

24hr ticker info for all symbols. Only symbols whose ticker info changed will be sent.

## URL PATH

`/public`

## Stream Name

`<symbol>@optionTicker` or `<underlying>@optionTicker@<expiretionDate>` e.g: btcusdt@optionTicker@251230

## Update Speed

**1000ms**

## Response Example

```json
{
  "e": "24hrTicker",
  "E": 1764080707933,
  "s": "ETH-251226-3000-C",
  "p": "0.0000",
  "P": "0.00",
  "w": "200.0000",
  "c": "200.0000",
  "Q": "1.0000",
  "o": "200.0000",
  "h": "200.0000",
  "l": "200.0000",
  "v": "9.0000",
  "q": "1800.0000",
  "O": 1764051060000,
  "C": 1764080707933,
  "F": 1,
  "L": 22,
  "n": 9
}
```
