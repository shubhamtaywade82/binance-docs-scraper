---
title: "Quarterly Contract Settlement Price"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Delivery-Price
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:57:28.298Z
---
# Quarterly Contract Settlement Price

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Delivery-Price>

# Quarterly Contract Settlement Price

## API Description

Latest price for a symbol or symbols.

## HTTP Request

GET `/futures/data/delivery-price`

## Request Weight

**0**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pair | STRING | YES | e.g BTCUSDT |

## Response Example

```json
[
  {
    "deliveryTime": 1695945600000,
    "deliveryPrice": 27103
  },
  {
    "deliveryTime": 1688083200000,
    "deliveryPrice": 30733.6
  },
  {
    "deliveryTime": 1680220800000,
    "deliveryPrice": 27814.2
  },
  {
    "deliveryTime": 1648166400000,
    "deliveryPrice": 44066.3
  }
]
```
