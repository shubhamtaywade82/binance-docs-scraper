---
title: "Mark Price"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Mark-Price
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:57:08.880Z
---
# Mark Price

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/market-data/rest-api/Mark-Price

# Mark Price

## API Description

Mark Price and Funding Rate

## HTTP Request

GET `/fapi/v1/premiumIndex`

## Request Weight

**1** with symbol, **10** without symbol

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |

## Response Example

> **Response:**

```json
{
  "symbol": "BTCUSDT",
  "markPrice": "11793.63104562",
  "indexPrice": "11781.80495970",
  "estimatedSettlePrice": "11781.16138815",
  "lastFundingRate": "0.00038246",
  "interestRate": "0.00010000",
  "nextFundingTime": 1597392000000,
  "time": 1597370495002
}
```

> **OR (when symbol not sent)**

```json
[
  {
    "symbol": "BTCUSDT",
    "markPrice": "11793.63104562",
    "indexPrice": "11781.80495970",
    "estimatedSettlePrice": "11781.16138815",
    "lastFundingRate": "0.00038246",
    "interestRate": "0.00010000",
    "nextFundingTime": 1597392000000,
    "time": 1597370495002
  }
]
```
