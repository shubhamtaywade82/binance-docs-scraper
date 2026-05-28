---
title: "Query User Rate Limit (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-User-Rate-Limit
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:43:05.320Z
---
# Query User Rate Limit (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-User-Rate-Limit>

# Query User Rate Limit (USER\_DATA)

## API Description

Query User Rate Limit

## HTTP Request

GET `/papi/v1/rateLimit/order`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
[
  {
    "rateLimitType": "ORDERS",
    "interval": "MINUTE",
    "intervalNum": 1,
    "limit": 1200
  }
]
```
