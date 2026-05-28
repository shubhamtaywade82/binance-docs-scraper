---
title: "Futures TradFi Perps Contract(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/PM-TradFi-Perps
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:00.752Z
---
# Futures TradFi Perps Contract(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/PM-TradFi-Perps>

# Futures TradFi Perps Contract(USER\_DATA)

## API Description

Sign TradFi-Perps agreement contract

## HTTP Request

POST `/papi/v1/um/stock/contract`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "code": 200,
  "msg": "success"
}
```
