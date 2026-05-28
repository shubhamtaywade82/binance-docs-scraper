---
title: "Cancel All CM Open Orders(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-CM-Open-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:19.002Z
---
# Cancel All CM Open Orders(TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-CM-Open-Orders

# Cancel All CM Open Orders(TRADE)

## API Description

Cancel all active LIMIT orders on specific symbol

## HTTP Request

DELETE `/papi/v1/cm/allOpenOrders`

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
