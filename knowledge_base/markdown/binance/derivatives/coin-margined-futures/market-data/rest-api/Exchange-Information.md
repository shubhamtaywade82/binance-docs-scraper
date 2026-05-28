---
title: "Exchange Information"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Exchange-Information
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:07.107Z
---
# Exchange Information

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Exchange-Information>

# Exchange Information

## API Description

Current exchange trading rules and symbol information

## HTTP Request

GET `/dapi/v1/exchangeInfo`

## Request Weight

1

## Request Parameters

NONE

## Response Example

```json
{
  "exchangeFilters": [],
  "rateLimits": [
    {
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 6000,
      "rateLimitType": "REQUEST_WEIGHT"
    },
    {
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 6000,
      "rateLimitType": "ORDERS"
    }
  ],
  "serverTime": 1565613908500,
  "symbols": [
    {
      "filters": [
        {
          "filterType": "PRICE_FILTER",
          "maxPrice": "100000",
          "minPrice": "0.1",
          "tickSize": "0.1"
        },
        {
          "filterType": "LOT_SIZE",
          "maxQty": "100000",
          "minQty": "1",
          "stepSize": "1"
        },
        {
          "filterType": "MARKET_LOT_SIZE",
          "maxQty": "100000",
          "minQty": "1",
          "stepSize": "1"
        },
        {
          "filterType": "MAX_NUM_ORDERS",
          "limit": 200
        },
        {
          "filterType": "PERCENT_PRICE",
          "multiplierUp": "1.0500",
          "multiplierDown": "0.9500",
          "multiplierDecimal": "4"
        }
      ],
      "orderTypes": [
        "LIMIT",
        "MARKET",
        "STOP",
        "TAKE_PROFIT",
        "TRAILING_STOP_MARKET"
      ],
      "timeInForce": [
        "GTC",
        "IOC",
        "FOK",
        "GTX"
      ],
      "liquidationFee": "0.010000",
      "marketTakeBound": "0.30",
      "symbol": "BTCUSD_200925",
      "pair": "BTCUSD",
      "contractType": "CURRENT_QUARTER",
      "deliveryDate": 1601020800000,
      "onboardDate": 1590739200000,
      "contractStatus": "TRADING",
      "contractSize": 100,
      "quoteAsset": "USD",
      "baseAsset": "BTC",
      "marginAsset": "BTC",
      "pricePrecision": 1,
      "quantityPrecision": 0,
      "baseAssetPrecision": 8,
      "quotePrecision": 8,
      "equalQtyPrecision": 4,
      "triggerProtect": "0.0500",
      "maintMarginPercent": "2.5000",
      "requiredMarginPercent": "5.0000",
      "underlyingType": "COIN",
      "underlyingSubType": []
    }
  ],
  "timezone": "UTC"
}
```
