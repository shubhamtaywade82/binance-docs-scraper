---
title: "Change Margin Type (TRADE)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Change-Margin-Type
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:54:35.673Z
---
# Change Margin Type (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/trade/rest-api/Change-Margin-Type>

# Change Margin Type (TRADE)

## API Description

Change user's margin type in the specific symbol market.For Hedge Mode, LONG and SHORT positions of one symbol use the same margin type.  
With ISOLATED margin type, margins of the LONG and SHORT positions are isolated from each other.

## HTTP Request

POST `/dapi/v1/marginType`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| marginType | ENUM | YES | ISOLATED, CROSSED |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "code": 200,
  "msg": "success"
}
```
