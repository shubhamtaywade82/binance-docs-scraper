---
title: "Symbol Order Book Ticker"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Order-Book-Ticker
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:57:25.265Z
---
# Symbol Order Book Ticker

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Symbol-Order-Book-Ticker

# Symbol Order Book Ticker

## API Description

Best price/qty on the order book for a symbol or symbols.

## HTTP Request

GET `/fapi/v1/ticker/bookTicker`

**Note**:

> Retail Price Improvement(RPI) orders are not visible and excluded in the response message.

## Request Weight

**2** for a single symbol;  
**5** when the symbol parameter is omitted

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |

> -   If the symbol is not sent, bookTickers for all symbols will be returned in an array.
> -   The field `X-MBX-USED-WEIGHT-1M` in response header is not accurate from this endpoint, please ignore.

## Response Example

```json
{
  "symbol": "BTCUSDT",
  "bidPrice": "4.00000000",
  "bidQty": "431.00000000",
  "askPrice": "4.00000200",
  "askQty": "9.00000000",
  "time": 1589437530011
}
```

> OR

```json
[
  {
    "symbol": "BTCUSDT",
    "bidPrice": "4.00000000",
    "bidQty": "431.00000000",
    "askPrice": "4.00000200",
    "askQty": "9.00000000",
    "time": 1589437530011
  }
]
```
