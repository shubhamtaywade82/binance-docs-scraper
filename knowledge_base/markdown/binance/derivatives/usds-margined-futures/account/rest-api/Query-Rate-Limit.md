---
title: "Query User Rate Limit (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Query-Rate-Limit
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:55:43.868Z
---
# Query User Rate Limit (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Query-Rate-Limit>

# Query User Rate Limit (USER\_DATA)

## API Description

Query User Rate Limit

## HTTP Request

GET `/fapi/v1/rateLimit/order`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```
[

  {

    "rateLimitType": "ORDERS",

    "interval": "SECOND",

    "intervalNum": 10,

    "limit": 10000,

  },

  {

    "rateLimitType": "ORDERS",

    "interval": "MINUTE",

    "intervalNum": 1,

    "limit": 20000,

  }

]

```
