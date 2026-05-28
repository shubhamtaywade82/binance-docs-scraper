---
title: "Get UM Futures Transaction Download Link by Id(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Futures-Transaction-Download-Link-by-Id
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:43:02.279Z
---
# Get UM Futures Transaction Download Link by Id(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Futures-Transaction-Download-Link-by-Id>

# Get UM Futures Transaction Download Link by Id(USER\_DATA)

## API Description

Get UM futures Transaction download link by Id

## HTTP Request

GET `/papi/v1/um/income/asyn/id`

## Request Weight

**10**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| downloadId | STRING | YES | get by download id api |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - Download link expiration: 7 days

## Response Example

> **Response:**

```
{

 "downloadId":"545923594199212032",

   "status":"completed",     // Enum：completed，processing

   "url":"www.binance.com",  // The link is mapped to download id

 "s3Link": null,

   "notified":true,          // ignore

   "expirationTimestamp":1645009771000,  // The link would expire after this timestamp

   "isExpired":null,

}

```

> **OR** (Response when server is processing)

```
{

 "downloadId":"545923594199212032",

   "status":"processing",

   "url":"", 

 "s3Link": null,

   "notified":false,

   "expirationTimestamp":-1

   "isExpired":null,

   

}

```
