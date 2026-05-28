---
title: "Cancel All UM Open Conditional Orders (Deprecated)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-UM-Open-Conditional-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:13.326Z
---
# Cancel All UM Open Conditional Orders (Deprecated)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-UM-Open-Conditional-Orders

# Cancel All UM Open Conditional Orders (Deprecated)

## API Description

Cancel All UM Open Conditional Orders

## HTTP Request

`DELETE /papi/v1/um/conditional/allOpenOrders`

## Request Weight(Order)

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "code": "200",
  "msg": "The operation of cancel all conditional open order is done."
}
```
