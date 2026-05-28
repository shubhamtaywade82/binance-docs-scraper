---
title: "Change CM Initial Leverage (TRADE)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-CM-Initial-Leverage
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:27.123Z
---
# Change CM Initial Leverage (TRADE)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Change-CM-Initial-Leverage

# Change CM Initial Leverage (TRADE)

## API Description

Change user's initial leverage of specific symbol in CM.

## HTTP Request

POST `/papi/v1/cm/leverage`

## Request Weight

**1**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | YES |  |
| leverage | INT | YES | target initial leverage: int from 1 to 125 |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```
{

    "leverage": 21,

    "maxQty": "1000",

    "symbol": "BTCUSD_200925"

}

```
