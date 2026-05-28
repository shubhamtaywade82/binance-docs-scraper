---
title: "Get Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/market-maker-endpoints/Get-Auto-Cancel-All-Open-Orders-Config
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:50:06.123Z
---
# Get Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)

> Source: <https://developers.binance.com/docs/derivatives/options-trading/market-maker-endpoints/Get-Auto-Cancel-All-Open-Orders-Config>

# Get Auto-Cancel All Open Orders (Kill-Switch) Config (TRADE)

## API Description

This endpoint returns the auto-cancel parameters for each underlying symbol. Note only active auto-cancel parameters will be returned, if countdownTime is set to 0 (ie. countdownTime has been turned off), the underlying symbol and corresponding countdownTime parameter will not be returned in the response.

## HTTP Request

GET `/eapi/v1/countdownCancelAll`

## Request Weight

1

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| underlying | STRING | NO | Option underlying, e.g BTCUSDT |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - countdownTime = 0 means the function is disabled.

## Response Example

```json
{
  "underlying": "ETHUSDT",
  "countdownTime": 100000
}
```
