---
title: "Option Position Information (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/options-trading/trade/Option-Position-Information
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T19:00:15.167Z
---
# Option Position Information (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/options-trading/trade/Option-Position-Information>

# Option Position Information (USER\_DATA)

## API Description

Get current position information.

## HTTP Request

GET `/eapi/v1/position`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO | Option trading pair, e.g BTC-200730-9000-C |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
[
  {
    "entryPrice": "1000",
    "symbol": "BTC-200730-9000-C",
    "side": "SHORT",
    "quantity": "-0.1",
    "markValue": "105.00138",
    "unrealizedPNL": "-5.00138",
    "markPrice": "1050.0138",
    "strikePrice": "9000",
    "expiryDate": 1593511200000,
    "priceScale": 2,
    "quantityScale": 2,
    "optionSide": "CALL",
    "quoteAsset": "USDT",
    "time": 1762872654561,
    "bidQuantity": "0.0000",
    "askQuantity": "0.0000"
  }
]
```
