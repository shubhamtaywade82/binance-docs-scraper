---
title: "Accept the offered quote (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/convert/Accept-Quote
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:46:53.831Z
---
# Accept the offered quote (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/convert/Accept-Quote>

# Accept the offered quote (USER\_DATA)

## API Description

Accept the offered quote by quote ID.

## HTTP Request

POST `/fapi/v1/convert/acceptQuote`

## Request Weight

**200(IP)**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| quoteId | STRING | YES |  |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "orderId": "933256278426274426",
  "createTime": 1623381330472,
  "orderStatus": "PROCESS"
}
```
