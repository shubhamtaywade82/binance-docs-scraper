---
title: "Modify Isolated Position Margin(TRADE)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Modify-Isolated-Position-Margin
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:54:44.144Z
---
# Modify Isolated Position Margin(TRADE)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Modify-Isolated-Position-Margin

# Modify Isolated Position Margin(TRADE)

## API Description

Modify Isolated Position Margin

## HTTP Request

POST `/dapi/v1/positionMargin`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| positionSide | ENUM | NO | Default `BOTH` for One-way Mode ; `LONG` or `SHORT` for Hedge Mode. It must be sent with Hedge Mode. |
| amount | DECIMAL | YES |  |
| type | INT | YES | 1: Add position margin,2: Reduce position margin |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   Only for isolated symbol

## Response Example

```json
{
  "amount": 100,
  "code": 200,
  "msg": "Successfully modify position margin.",
  "type": 1
}
```
