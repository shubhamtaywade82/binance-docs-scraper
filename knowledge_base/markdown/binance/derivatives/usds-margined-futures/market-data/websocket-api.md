---
title: "Order Book"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/websocket-api
kind: websocket_stream
category: docs
source: binance
scraped_at: 2026-05-28T18:53:38.459Z
---
# Order Book

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/websocket-api>

# Order Book

## API Description

Get current order book. Note that this request returns limited market depth. If you need to continuously monitor order book updates, please consider using Websocket Market Streams:

- `<symbol>@depth<levels>`
- `<symbol>@depth`

You can use `depth` request together with `<symbol>@depth` streams to maintain a local order book.

## Method

`depth`

**Note**:

> Retail Price Improvement(RPI) orders are not visible and excluded in the response message.

## Request

```json
{
  "id": "51e2affb-0aba-4821-ba75-f2625006eb43",
  "method": "depth",
  "params": {
    "symbol": "BTCUSDT"
  }
}
```

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
  "id": "51e2affb-0aba-4821-ba75-f2625006eb43",
  "status": 200,
  "result": {
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
  },
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 2400,
      "count": 5
    }
  ]
}
```
