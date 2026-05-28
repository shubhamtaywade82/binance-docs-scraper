---
title: "UM Futures Symbol Configuration(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Futures-Symbol-Config
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:42:40.761Z
---
# UM Futures Symbol Configuration(USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Get-UM-Futures-Symbol-Config

# UM Futures Symbol Configuration(USER\_DATA)

## API Description

Get current UM account symbol configuration.

## HTTP Request

GET `/papi/v1/um/symbolConfig`

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

  "isAutoAddMargin": "false",

  "leverage": 21,

  "maxNotionalValue": "1000000",

  }

]

```
