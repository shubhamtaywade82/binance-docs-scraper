---
title: "Transfer LDUSDT/RWUSD for Portfolio Margin(TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Transfer-LDUSDT-Portfolio-Margin
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:07.209Z
---
# Transfer LDUSDT/RWUSD for Portfolio Margin(TRADE)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Transfer-LDUSDT-Portfolio-Margin>

# Transfer LDUSDT/RWUSD for Portfolio Margin(TRADE)

## API Description

Transfer LDUSDT/RWUSD as collateral for all types of Portfolio Margin account

## HTTP Request

POST `/sapi/v1/portfolio/earn-asset-transfer`

## Request Weight(UID)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES | `LDUSDT` and `RWUSD` |
| transferType | STRING | YES | `EARN_TO_FUTURE` /`FUTURE_TO_EARN` |
| amount | DECIMAL | YES |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "msg": "success"
}
```
