---
title: "Get Download Id For UM Futures Trade History (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-Download-Id-For-UM-Futures-Trade-History
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:46.912Z
---
# Get Download Id For UM Futures Trade History (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-Download-Id-For-UM-Futures-Trade-History>

# Get Download Id For UM Futures Trade History (USER\_DATA)

## API Description

Get download id for UM futures trade history

## HTTP Request

GET `/papi/v1/um/trade/asyn`

## Request Weight

**1500**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | LONG | YES | Timestamp in ms |
| endTime | LONG | YES | Timestamp in ms |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - Request Limitation is 5 times per month, shared by front end download page and rest api
> - The time between `startTime` and `endTime` can not be longer than 1 year

## Response Example

```
{

 "avgCostTimestampOfLast30d":7241837, // Average time taken for data download in the past 30 days

   "downloadId":"546975389218332672",

}

```
