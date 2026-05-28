---
title: "Get Transferable Earn Asset Balance for Portfolio Margin (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Transferable-Earn-Asset-Balance-Portfolio-Margin
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:10.199Z
---
# Get Transferable Earn Asset Balance for Portfolio Margin (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Transferable-Earn-Asset-Balance-Portfolio-Margin

# Get Transferable Earn Asset Balance for Portfolio Margin (USER\_DATA)

## API Description

Get transferable earn asset balance for all types of Portfolio Margin account

## HTTP Request

GET `/sapi/v1/portfolio/earn-asset-balance`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES | `LDUSDT` only |
| transferType | STRING | YES | `EARN_TO_FUTURE` /`FUTURE_TO_EARN` |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "asset": "LDUSDT",
  "amount": "0.55"
}
```
