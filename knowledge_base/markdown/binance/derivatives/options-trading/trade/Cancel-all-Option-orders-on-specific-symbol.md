---
title: "Cancel all Option orders on specific symbol (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/trade/Cancel-all-Option-orders-on-specific-symbol
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T19:00:02.323Z
---
# Cancel all Option orders on specific symbol (TRADE)

> Source: https://developers.binance.com/docs/derivatives/options-trading/trade/Cancel-all-Option-orders-on-specific-symbol

# Cancel all Option orders on specific symbol (TRADE)

## API Description

Cancel all active order on a symbol.

## HTTP Request

DELETE `/eapi/v1/allOpenOrders`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES | Option trading pair, e.g BTC-200730-9000-C |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "code": "0",
  "msg": "success"
}
```
