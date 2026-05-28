---
title: "Symbol Price Ticker V2"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Price-Ticker-v2
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:57:22.562Z
---
# Symbol Price Ticker V2

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Price-Ticker-v2

# Symbol Price Ticker V2

## API Description

Latest price for a symbol or symbols.

## HTTP Request

GET `/fapi/v2/ticker/price`

**Weight:**

**1** for a single symbol;  
**2** when the symbol parameter is omitted

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |

> -   If the symbol is not sent, prices for all symbols will be returned in an array.
> -   The field `X-MBX-USED-WEIGHT-1M` in response header is not accurate from this endpoint, please ignore.

## Response Example

```json
{
  "symbol": "BTCUSDT",
  "price": "6000.01",
  "time": 1589437530011
}
```

> OR

```json
[
  {
    "symbol": "BTCUSDT",
    "price": "6000.01",
    "time": 1589437530011
  }
]
```
