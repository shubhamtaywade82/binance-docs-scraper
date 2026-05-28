---
title: "Get Margin Call Level (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Margin-Call-Level
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:21.607Z
---
# Get Margin Call Level (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin-pro/account/Get-Margin-Call-Level>

# Get Margin Call Level (USER\_DATA)

## API Description

Get the margin call level for a Portfolio Margin account.

## HTTP Request

GET `/sapi/v1/portfolio/margin-call-level`

## Request Weight(IP)

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

When margin call level is set:

```json
{
  "marginCallLevel": "1.67354637"
}
```

When margin call level is not set:

```json
{}
```
