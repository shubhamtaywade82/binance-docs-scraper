---
title: "User Commission (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/options-trading/trade/User-Commission
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:59:46.323Z
---
# User Commission (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/options-trading/trade/User-Commission>

# User Commission (USER\_DATA)

## API Description

Get account commission.

## HTTP Request

GET `/eapi/v1/commission`

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
  "commissions": [
    {
      "underlying": "BTCUSDT",
      "makerFee": "0.000240",
      "takerFee": "0.000240"
    },
    {
      "underlying": "ETHUSDT",
      "makerFee": "0.000240",
      "takerFee": "0.000240"
    },
    {
      "underlying": "BNBUSDT",
      "makerFee": "0.000240",
      "takerFee": "0.000240"
    },
    {
      "underlying": "SOLUSDT",
      "makerFee": "0.000240",
      "takerFee": "0.000240"
    },
    {
      "underlying": "XRPUSDT",
      "makerFee": "0.000240",
      "takerFee": "0.000240"
    },
    {
      "underlying": "DOGEUSDT",
      "makerFee": "0.000240",
      "takerFee": "0.000240"
    }
  ]
}
```
