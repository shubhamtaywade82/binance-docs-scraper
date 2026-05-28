---
title: "Cancel All Open Orders (TRADE)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-All-Open-Orders
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:48:06.461Z
---
# Cancel All Open Orders (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/trade/rest-api/Cancel-All-Open-Orders>

# Cancel All Open Orders (TRADE)

## API Description

Cancel All Open Orders

## HTTP Request

DELETE `/fapi/v1/allOpenOrders`

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
