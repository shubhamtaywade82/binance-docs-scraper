---
title: "New CM Order(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-CM-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:41.771Z
---
# New CM Order(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-CM-Order>

# New CM Order(TRADE)

## API Description

Place new CM order

## HTTP Request

POST `/papi/v1/cm/order`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| side | ENUM | YES |  |
| positionSide | ENUM | NO | Default `BOTH` for One-way Mode ; `LONG` or `SHORT` for Hedge Mode. It must be sent in Hedge Mode. |
| type | ENUM | YES | "LIMIT", "MARKET" |
| timeInForce | ENUM | NO |  |
| quantity | DECIMAL | NO |  |
| reduceOnly | STRING | NO | "true" or "false". default "false". Cannot be sent in Hedge Mode. |
| price | DECIMAL | NO |  |
| priceMatch | ENUM | NO | only avaliable for `LIMIT`/`STOP`/`TAKE_PROFIT` order; can be set to `OPPONENT`/ `OPPONENT_5`/ `OPPONENT_10`/ `OPPONENT_20`: /`QUEUE`/ `QUEUE_5`/ `QUEUE_10`/ `QUEUE_20`; Can't be passed together with `price` |
| newClientOrderId | STRING | NO | A unique id among open orders. Automatically generated if not sent. Can only be string following the rule: `^[\.A-Z\:/a-z0-9_-]{1,32}$` |
| newOrderRespType | ENUM | NO | "ACK", "RESULT", default "ACK" |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

Additional mandatory parameters based on `type`:

| Type | Additional mandatory parameters |
| --- | --- |
| `LIMIT` | `timeInForce`, `quantity`, `price` |
| `MARKET` | `quantity` |

- If `newOrderRespType` is sent as `RESULT` :
  - `MARKET` order: the final FILLED result of the order will be return directly.
  - `LIMIT` order with special `timeInForce`: the final status result of the order(FILLED or EXPIRED) will be returned directly.

## Response Example

```json
{
  "clientOrderId": "testOrder",
  "cumQty": "0",
  "cumBase": "0",
  "executedQty": "0",
  "orderId": 22542179,
  "avgPrice": "0.0",
  "origQty": "10",
  "price": "0",
  "reduceOnly": false,
  "side": "BUY",
  "positionSide": "SHORT",
  "status": "NEW",
  "symbol": "BTCUSD_200925",
  "pair": "BTCUSD",
  "timeInForce": "GTC",
  "type": "MARKET",
  "updateTime": 1566818724722
}
```
