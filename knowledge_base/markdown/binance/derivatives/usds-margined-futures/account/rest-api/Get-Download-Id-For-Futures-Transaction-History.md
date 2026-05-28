---
title: "Get Download Id For Futures Transaction History(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Transaction-History
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:56:03.727Z
---
# Get Download Id For Futures Transaction History(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Transaction-History>

# Get Download Id For Futures Transaction History(USER\_DATA)

## API Description

Get download id for futures transaction history

## HTTP Request

GET `/fapi/v1/income/asyn`

## Request Weight

**1000**

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
