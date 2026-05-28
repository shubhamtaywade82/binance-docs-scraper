---
title: "Order Book"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Order-Book
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:58:12.192Z
---
# Order Book

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/market-data/rest-api/Order-Book>

# Order Book

## API Description

Query orderbook on specific symbol

## HTTP Request

GET `/dapi/v1/depth`

## Request Weight

Adjusted based on the limit:

| Limit | Weight |
| --- | --- |
| 5, 10, 20, 50 | 2 |
| 100 | 5 |
| 500 | 10 |
| 1000 | 20 |

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| limit | INT | NO | Default 500; Valid limits:\[5, 10, 20, 50, 100, 500, 1000\] |

## Response Example

```json
{
  "lastUpdateId": 16769853,
  "symbol": "BTCUSD_PERP",
  "pair": "BTCUSD",
  "E": 1591250106370,
  "T": 1591250106368,
  "bids": [
    [
      "9638.0",
      "431"
    ]
  ],
  "asks": [
    [
      "9638.2",
      "12"
    ]
  ]
}
```
