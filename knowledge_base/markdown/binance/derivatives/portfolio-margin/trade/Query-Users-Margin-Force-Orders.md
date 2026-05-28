---
title: "Query User's Margin Force Orders(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Users-Margin-Force-Orders
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:50.050Z
---
# Query User's Margin Force Orders(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Users-Margin-Force-Orders>

# Query User's Margin Force Orders(USER\_DATA)

## API Description

Query user's margin force orders

## HTTP Request

GET `/papi/v1/margin/forceOrders`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| current | LONG | NO | Currently querying page. Start from 1. Default:1 |
| size | LONG | NO | Default:10 Max:100 |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "rows": [
    {
      "avgPrice": "0.00388359",
      "executedQty": "31.39000000",
      "orderId": 180015097,
      "price": "0.00388110",
      "qty": "31.39000000",
      "side": "SELL",
      "symbol": "BNBBTC",
      "timeInForce": "GTC",
      "updatedTime": 1558941374745
    }
  ],
  "total": 1
}
```
