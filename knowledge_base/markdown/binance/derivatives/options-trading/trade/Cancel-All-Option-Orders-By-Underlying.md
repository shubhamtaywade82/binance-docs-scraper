---
title: "Cancel All Option Orders By Underlying (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/trade/Cancel-All-Option-Orders-By-Underlying
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:59:59.809Z
---
# Cancel All Option Orders By Underlying (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/options-trading/trade/Cancel-All-Option-Orders-By-Underlying>

# Cancel All Option Orders By Underlying (TRADE)

## API Description

Cancel all active orders on specified underlying.

## HTTP Request

DELETE `/eapi/v1/allOpenOrdersByUnderlying`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| underlying | STRING | YES | Option underlying, e.g BTCUSDT |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```
{

    "code": 0,

    "msg": "success",

}

```
