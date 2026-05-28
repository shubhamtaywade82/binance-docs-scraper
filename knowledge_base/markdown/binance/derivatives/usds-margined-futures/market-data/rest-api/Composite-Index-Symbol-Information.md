---
title: "Composite Index Symbol Information"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Composite-Index-Symbol-Information
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:57:50.450Z
---
# Composite Index Symbol Information

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Composite-Index-Symbol-Information

# Composite Index Symbol Information

## API Description

Query composite index symbol information

## HTTP Request

GET `/fapi/v1/indexInfo`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |

> -   Only for composite index symbols

## Response Example

```json
[
  {
    "symbol": "DEFIUSDT",
    "time": 1589437530011,
    "component": "baseAsset",
    "baseAssetList": [
      {
        "baseAsset": "BAL",
        "quoteAsset": "USDT",
        "weightInQuantity": "1.04406228",
        "weightInPercentage": "0.02783900"
      },
      {
        "baseAsset": "BAND",
        "quoteAsset": "USDT",
        "weightInQuantity": "3.53782729",
        "weightInPercentage": "0.03935200"
      }
    ]
  }
]
```
