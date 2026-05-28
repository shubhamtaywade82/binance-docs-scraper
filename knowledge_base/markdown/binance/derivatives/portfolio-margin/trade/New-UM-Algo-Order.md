---
title: "New UM Algo Order (TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-UM-Algo-Order
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:50:36.230Z
---
# New UM Algo Order (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/New-UM-Algo-Order>

# New UM Algo Order (TRADE)

## API Description

Place new UM conditional order

## HTTP Request

POST `/papi/v1/um/algo/order`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algoType | ENUM | YES | Only support `CONDITIONAL` |
| symbol | STRING | YES |  |
| side | ENUM | YES |  |
| positionSide | ENUM | NO | Default `BOTH` for One-way Mode ; `LONG` or `SHORT` for Hedge Mode. It must be sent in Hedge Mode. |
| type | ENUM | YES | For `CONDITIONAL` algoType, `STOP_MARKET`/`TAKE_PROFIT_MARKET`/`STOP`/`TAKE_PROFIT`/`TRAILING_STOP_MARKET` as order type |
| timeInForce | ENUM | NO | `IOC` or `GTC` or `FOK` or `GTX` , default `GTC` |
| quantity | DECIMAL | YES | Order quantity |
| price | DECIMAL | NO |  |
| triggerPrice | DECIMAL | NO |  |
| workingType | ENUM | NO | triggerPrice triggered by: `MARK_PRICE`, `CONTRACT_PRICE`. Default `CONTRACT_PRICE` |
| priceMatch | ENUM | NO | only avaliable for `LIMIT`/`STOP`/`TAKE_PROFIT` order; can be set to `OPPONENT`/ `OPPONENT_5`/ `OPPONENT_10`/ `OPPONENT_20`: /`QUEUE`/ `QUEUE_5`/ `QUEUE_10`/ `QUEUE_20`; Can't be passed together with `price` |
| priceProtect | STRING | NO | "true" or "false", default "false". Used with `STOP_MARKET` or `TAKE_PROFIT_MARKET` order. when price reaches the triggerPrice, the difference rate between "MARK\_PRICE" and "CONTRACT\_PRICE" cannot be larger than the Price Protection Threshold of the symbol. |
| reduceOnly | STRING | NO | "true" or "false". default "false". Cannot be sent in Hedge Mode. |
| activatePrice | DECIMAL | NO | Used with `TRAILING_STOP_MARKET` orders, default as the latest price(supporting different `workingType`) |
| callbackRate | DECIMAL | NO | Used with `TRAILING_STOP_MARKET` orders, min 0.1, max 10 where 1 for 1% |
| clientAlgoId | STRING | NO | A unique id among open orders. Automatically generated if not sent. Can only be string following the rule: `^[\.A-Z\:/a-z0-9_-]{1,36}$` |
| newOrderRespType | ENUM | NO | "ACK", "RESULT", default "ACK" |
| selfTradePreventionMode | ENUM | NO | `EXPIRE_TAKER`:expire taker order when STP triggers/ `EXPIRE_MAKER`:expire maker order when STP triggers/ `EXPIRE_BOTH`:expire both orders when STP triggers; default `NONE` |
| goodTillDate | LONG | NO | order cancel time for timeInForce `GTD`, mandatory when `timeInforce` set to `GTD`; order the timestamp only retains second-level precision, ms part will be ignored; The goodTillDate timestamp must be greater than the current time plus 600 seconds and smaller than 253402300799000 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - Algo order with type `STOP`, parameter `timeInForce` can be sent ( default `GTC`).
> - Algo order with type `TAKE_PROFIT`, parameter `timeInForce` can be sent ( default `GTC`).

> - Condition orders will be triggered when:
>
>   - If parameter`priceProtect`is sent as true:
>     - when price reaches the `triggerPrice` , the difference rate between "MARK\_PRICE" and "CONTRACT\_PRICE" cannot be larger than the "triggerProtect" of the symbol
>     - "triggerProtect" of a symbol can be got from `GET /fapi/v1/exchangeInfo`
>   - `STOP`, `STOP_MARKET`:
>     - BUY: latest price ("MARK\_PRICE" or "CONTRACT\_PRICE") >= `triggerPrice`
>     - SELL: latest price ("MARK\_PRICE" or "CONTRACT\_PRICE") <= `triggerPrice`
>   - `TAKE_PROFIT`, `TAKE_PROFIT_MARKET`:
>     - BUY: latest price ("MARK\_PRICE" or "CONTRACT\_PRICE") <= `triggerPrice`
>     - SELL: latest price ("MARK\_PRICE" or "CONTRACT\_PRICE") >= `triggerPrice`
>   - `TRAILING_STOP_MARKET`:
>     - BUY: the lowest price after order placed <= `activatePrice`, and the latest price >= the lowest price \* (1 + `callbackRate`)
>     - SELL: the highest price after order placed >= `activatePrice`, and the latest price <= the highest price \* (1 - `callbackRate`)
> - For `TRAILING_STOP_MARKET`, if you got such error code.  
>     `{"code": -2021, "msg": "Order would immediately trigger."}`  
>     means that the parameters you send do not meet the following requirements:
>
>   - BUY: `activatePrice` should be smaller than latest price.
>   - SELL: `activatePrice` should be larger than latest price.
> - `selfTradePreventionMode` is only effective when `timeInForce` set to `IOC` or `GTC` or `GTD`.
>

## Response Example

```json
{
  "algoId": 2146760,
  "clientAlgoId": "6B2I9XVcJpCjqPAJ4YoFX7",
  "algoType": "CONDITIONAL",
  "orderType": "TAKE_PROFIT",
  "symbol": "BNBUSDT",
  "side": "SELL",
  "positionSide": "BOTH",
  "timeInForce": "GTC",
  "quantity": "0.01",
  "algoStatus": "NEW",
  "triggerPrice": "750.000",
  "price": "750.000",
  "icebergQuantity": null,
  "selfTradePreventionMode": "EXPIRE_MAKER",
  "workingType": "CONTRACT_PRICE",
  "priceMatch": "NONE",
  "priceProtect": false,
  "reduceOnly": false,
  "activatePrice": "",
  "callbackRate": "",
  "createTime": 1750485492076,
  "updateTime": 1750485492076,
  "triggerTime": 0,
  "goodTillDate": 0
}
```
