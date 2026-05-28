---
title: "CM Account Trade List(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/CM-Account-Trade-List
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:52:56.291Z
---
# CM Account Trade List(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/trade/CM-Account-Trade-List>

# CM Account Trade List(USER\_DATA)

## API Description

Get trades for a specific account and CM symbol.

## HTTP Request

GET `/papi/v1/cm/userTrades`

## Request Weight

**20** with symbol, **40** with pair

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | STRING | NO |  |
| pair | STRING | NO |  |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| fromId | LONG | NO | Trade id to fetch from. Default gets most recent trades. |
| limit | INT | NO | Default 50; max 1000. |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

> - Either `symbol` or `pair` must be sent
> - `symbol` and `pair` cannot be sent together
> - `pair` and `fromId` cannot be sent together
> - `OrderId` can only be sent together with symbol
> - If a `pair` is sent, tickers for all symbols of the `pair` will be returned
> - The parameter `fromId` cannot be sent with `startTime` or `endTime`
> - If `startTime` and `endTime` are both not sent, then the last '24 hours' data will be returned.
> - The time between `startTime` and `endTime` cannot be longer than 24 hours.

## Response Example

```
[

    {

        'symbol': 'BTCUSD_200626',

        'id': 6,

        'orderId': 28,

        'pair': 'BTCUSD',

        'side': 'SELL',

        'price': '8800',

        'qty': '1',

        'realizedPnl': '0',

        'marginAsset': 'BTC',

        'baseQty': '0.01136364',

        'commission': '0.00000454',

        'commissionAsset': 'BTC',

        'time': 1590743483586,

        'positionSide': 'BOTH',

        'buyer': false,

        'maker': false

    }

]

```
