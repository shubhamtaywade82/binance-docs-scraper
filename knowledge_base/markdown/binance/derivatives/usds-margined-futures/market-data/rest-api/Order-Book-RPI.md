---
title: "RPI Order Book"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Order-Book-RPI
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:42.691Z
---
# RPI Order Book

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Order-Book-RPI>

# RPI Order Book

## API Description

Query symbol orderbook with RPI orders

## HTTP Request

GET `/fapi/v1/rpiDepth`

**Note**:

> RPI(Retail Price Improvement) orders are included and aggreated in the response message. Crossed price levels are hidden and invisible.

## Request Weight

Adjusted based on the limit:

| Limit | Weight |
| --- | --- |
| 1000 | 20 |

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| limit | INT | NO | Default 1000; Valid limits:\[1000\] |

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
