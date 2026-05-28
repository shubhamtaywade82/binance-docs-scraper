---
title: "Cancel All CM Open Conditional Orders(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-CM-Open-Conditional-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:51:24.719Z
---
# Cancel All CM Open Conditional Orders(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Cancel-All-CM-Open-Conditional-Orders>

# Cancel All CM Open Conditional Orders(TRADE)

## API Description

Cancel All CM Open Conditional Orders

## HTTP Request

DELETE `/papi/v1/cm/conditional/allOpenOrders`

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
  "code": "200",
  "msg": "The operation of cancel all conditional open order is done."
}
```
