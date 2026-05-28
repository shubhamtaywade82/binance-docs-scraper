---
title: "Get Download Id For Futures Trade History (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Trade-History
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:49:57.800Z
---
# Get Download Id For Futures Trade History (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Get-Download-Id-For-Futures-Trade-History

# Get Download Id For Futures Trade History (USER\_DATA)

## API Description

Get download id for futures trade history

## HTTP Request

GET `/dapi/v1/trade/asyn`

## Request Weight

**1000**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | LONG | YES | Timestamp in ms |
| endTime | LONG | YES | Timestamp in ms |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> -   Request Limitation is 8 times per month, shared by front end download page and rest api
> -   This endpoint uses the IP rate limit bucket and costs 1000 weight per call. The maximum is 2 calls per minute; the 3rd call within the same minute will trigger a ban.
> -   The time between `startTime` and `endTime` can not be longer than 1 year

## Response Example

```
{

	"avgCostTimestampOfLast30d":7241837, // Average time taken for data download in the past 30 days

  	"downloadId":"546975389218332672",

}

```
