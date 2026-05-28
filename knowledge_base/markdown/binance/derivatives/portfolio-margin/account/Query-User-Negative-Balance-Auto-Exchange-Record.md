---
title: "Query User Negative Balance Auto Exchange Record (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-User-Negative-Balance-Auto-Exchange-Record
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:39:55.807Z
---
# Query User Negative Balance Auto Exchange Record (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-User-Negative-Balance-Auto-Exchange-Record

# Query User Negative Balance Auto Exchange Record (USER\_DATA)

## API Description

Query user negative balance auto exchange record

## HTTP Request

GET `/papi/v1/portfolio/negative-balance-exchange-record`

## Request Weight

**100**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | LONG | YES |  |
| endTime | LONG | YES |  |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

**Note**

> -   Response in descending order
> -   The max interval between `startTime` and `endTime` is 3 months.

## Response Example

```json
{
  "total": 2,
  "rows": [
    {
      "startTime": 1736263046841,
      "endTime": 1736263248179,
      "details": [
        {
          "asset": "ETH",
          "negativeBalance": 18,
          "negativeMaxThreshold": 5
        }
      ]
    },
    {
      "startTime": 1736184913252,
      "endTime": 1736184965474,
      "details": [
        {
          "asset": "BNB",
          "negativeBalance": 1.10264488,
          "negativeMaxThreshold": 0
        }
      ]
    }
  ]
}
```
