---
title: "Order Book"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Order-Book
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:39.642Z
---
# Order Book

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Order-Book

# Order Book

## API Description

Query symbol orderbook

## HTTP Request

GET `/fapi/v1/depth`

**Note**:

> Retail Price Improvement(RPI) orders are not visible and excluded in the response message.

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
  "lastUpdateId": 1027024,
  "E": 1589436922972,
  "T": 1589436922959,
  "bids": [
    [
      "4.00000000",
      "431.00000000"
    ]
  ],
  "asks": [
    [
      "4.00000200",
      "12.00000000"
    ]
  ]
}
```
