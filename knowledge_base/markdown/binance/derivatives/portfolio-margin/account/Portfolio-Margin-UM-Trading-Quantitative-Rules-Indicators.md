---
title: "Portfolio Margin UM Trading Quantitative Rules Indicators(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Portfolio-Margin-UM-Trading-Quantitative-Rules-Indicators
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:46.855Z
---
# Portfolio Margin UM Trading Quantitative Rules Indicators(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Portfolio-Margin-UM-Trading-Quantitative-Rules-Indicators

# Portfolio Margin UM Trading Quantitative Rules Indicators(USER\_DATA)

## API Description

Portfolio Margin UM Trading Quantitative Rules Indicators

## HTTP Request

GET `/papi/v1/um/apiTradingStatus`

## Request Weight

**1** for a single symbol **10** when the symbol parameter is omitted

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "indicators": {
    "BTCUSDT": [
      {
        "isLocked": true,
        "plannedRecoverTime": 1545741270000,
        "indicator": "UFR",
        "value": 0.05,
        "triggerValue": 0.995
      },
      {
        "isLocked": true,
        "plannedRecoverTime": 1545741270000,
        "indicator": "IFER",
        "value": 0.99,
        "triggerValue": 0.99
      },
      {
        "isLocked": true,
        "plannedRecoverTime": 1545741270000,
        "indicator": "GCR",
        "value": 0.99,
        "triggerValue": 0.99
      },
      {
        "isLocked": true,
        "plannedRecoverTime": 1545741270000,
        "indicator": "DR",
        "value": 0.99,
        "triggerValue": 0.99
      }
    ]
  },
  "updateTime": 1545741270000
}
```

Or (account violation triggered)

```json
{
  "indicators": {
    "ACCOUNT": [
      {
        "indicator": "TMV",
        "value": 10,
        "triggerValue": 1,
        "plannedRecoverTime": 1644919865000,
        "isLocked": true
      }
    ]
  },
  "updateTime": 1644913304748
}
```
