---
title: "Symbol Configuration(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Symbol-Config
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:55:40.579Z
---
# Symbol Configuration(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Symbol-Config

# Symbol Configuration(USER\_DATA)

## API Description

Get current account symbol configuration.

## HTTP Request

GET `/fapi/v1/symbolConfig`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```
[

  {

  "symbol": "BTCUSDT", 

  "marginType": "CROSSED",

  "isAutoAddMargin": false,

  "leverage": 21,

  "maxNotionalValue": "1000000",

  }

]

```
