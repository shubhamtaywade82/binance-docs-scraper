---
title: "Query Index Price Constituents"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Index-Constituents
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:24.972Z
---
# Query Index Price Constituents

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Index-Constituents>

# Query Index Price Constituents

## API Description

Query index price constituents

## HTTP Request

GET `/dapi/v1/constituents`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |

## Response Example

```json
{
  "symbol": "BTCUSD",
  "time": 1697422647853,
  "constituents": [
    {
      "exchange": "bitstamp",
      "symbol": "btcusd"
    },
    {
      "exchange": "coinbase",
      "symbol": "BTC-USD"
    },
    {
      "exchange": "kraken",
      "symbol": "XBT/USD"
    },
    {
      "exchange": "binance_cross",
      "symbol": "BTCUSDC*index(USDCUSD)"
    }
  ]
}
```
