---
title: "Cancel All UM Open Orders(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-UM-Open-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:01.513Z
---
# Cancel All UM Open Orders(TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-UM-Open-Orders

# Cancel All UM Open Orders(TRADE)

## API Description

Cancel all active LIMIT orders on specific symbol

## HTTP Request

DELETE `/papi/v1/um/allOpenOrders`

## Request Weight

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
  "code": 200,
  "msg": "The operation of cancel all open order is done."
}
```
