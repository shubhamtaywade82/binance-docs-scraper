---
title: "Symbol Price Ticker"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/websocket-api/Symbol-Price-Ticker
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:53:40.781Z
---
# Symbol Price Ticker

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/websocket-api/Symbol-Price-Ticker

# Symbol Price Ticker

## API Description

Latest price for a symbol or symbols.

## Method

`ticker.price`

## Request

```json
{
  "id": "9d32157c-a556-4d27-9866-66760a174b57",
  "method": "ticker.price",
  "params": {
    "symbol": "BTCUSDT"
  }
}
```

**Weight:**

**1** for a single symbol;  
**2** when the symbol parameter is omitted

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |

> -   If the symbol is not sent, prices for all symbols will be returned in an array.

## Response Example

```json
{
  "id": "9d32157c-a556-4d27-9866-66760a174b57",
  "status": 200,
  "result": {
    "symbol": "BTCUSDT",
    "price": "6000.01",
    "time": 1589437530011
  },
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 2400,
      "count": 2
    }
  ]
}
```

> OR

```json
{
  "id": "9d32157c-a556-4d27-9866-66760a174b57",
  "status": 200,
  "result": [
    {
      "symbol": "BTCUSDT",
      "price": "6000.01",
      "time": 1589437530011
    }
  ],
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 2400,
      "count": 2
    }
  ]
}
```
