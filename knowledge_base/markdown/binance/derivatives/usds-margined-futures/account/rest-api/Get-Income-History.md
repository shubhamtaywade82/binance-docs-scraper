---
title: "Get Income History (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Income-History
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:55:57.035Z
---
# Get Income History (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Income-History>

# Get Income History (USER\_DATA)

## API Description

Query income history

## HTTP Request

GET `/fapi/v1/income`

## Request Weight

**30**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| incomeType | STRING | NO | TRANSFER, WELCOME\_BONUS, REALIZED\_PNL, FUNDING\_FEE, COMMISSION, INSURANCE\_CLEAR, REFERRAL\_KICKBACK, COMMISSION\_REBATE, API\_REBATE, CONTEST\_REWARD, CROSS\_COLLATERAL\_TRANSFER, OPTIONS\_PREMIUM\_FEE, OPTIONS\_SETTLE\_PROFIT, INTERNAL\_TRANSFER, AUTO\_EXCHANGE, DELIVERED\_SETTELMENT, COIN\_SWAP\_DEPOSIT, COIN\_SWAP\_WITHDRAW, POSITION\_LIMIT\_INCREASE\_FEE, STRATEGY\_UMFUTURES\_TRANSFER，FEE\_RETURN，BFUSD\_REWARD |
| startTime | LONG | NO | Timestamp in ms to get funding from INCLUSIVE. |
| endTime | LONG | NO | Timestamp in ms to get funding until INCLUSIVE. |
| page | INT | NO |  |
| limit | INT | NO | Default 100; max 1000 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - If neither `startTime` nor `endTime` is sent, the recent 7-day data will be returned.
> - If `incomeType` is not sent, all kinds of flow will be returned
> - "trandId" is unique in the same incomeType for a user
> - Income history only contains data for the last three months

## Response Example

```json
[
  {
    "symbol": "",
    "incomeType": "TRANSFER",
    "income": "-0.37500000",
    "asset": "USDT",
    "info": "TRANSFER",
    "time": 1570608000000,
    "tranId": 9689322392,
    "tradeId": ""
  },
  {
    "symbol": "BTCUSDT",
    "incomeType": "COMMISSION",
    "income": "-0.01000000",
    "asset": "USDT",
    "info": "COMMISSION",
    "time": 1570636800000,
    "tranId": 9689322392,
    "tradeId": "2059192"
  }
]
```
