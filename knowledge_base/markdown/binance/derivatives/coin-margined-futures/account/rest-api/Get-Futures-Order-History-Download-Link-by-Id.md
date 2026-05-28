---
title: "Get Futures Order History Download Link by Id (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Get-Futures-Order-History-Download-Link-by-Id
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:49:55.238Z
---
# Get Futures Order History Download Link by Id (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/coin-margined-futures/account/rest-api/Get-Futures-Order-History-Download-Link-by-Id>

# Get Futures Order History Download Link by Id (USER\_DATA)

## API Description

Get futures order history download link by Id

## HTTP Request

GET `/dapi/v1/order/asyn/id`

## Request Weight

5

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

   "notified":false,

   "expirationTimestamp":-1

   "isExpired":null,

   

}

```
