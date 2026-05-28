---
title: "Classic Portfolio Margin Account Information (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/coin-margined-futures/portfolio-margin-endpoints
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:39:50.711Z
---
# Classic Portfolio Margin Account Information (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/coin-margined-futures/portfolio-margin-endpoints

# Classic Portfolio Margin Account Information (USER\_DATA)

## API Description

Get Classic Portfolio Margin current account information.

## HTTP Request

GET `/dapi/v1/pmAccountInfo`

## Request Weight(IP)

**5**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES |  |
| recvWindow | LONG | NO |  |

> -   maxWithdrawAmount is for asset transfer out to the spot wallet.

## Response Example

```
{

    "maxWithdrawAmountUSD": "25347.92083245",   // Classic Portfolio margin maximum virtual amount for transfer out in USD

    "asset": "BTC",            // asset name

    "maxWithdrawAmount": "1.33663654",        // maximum amount for transfer out

}

```
