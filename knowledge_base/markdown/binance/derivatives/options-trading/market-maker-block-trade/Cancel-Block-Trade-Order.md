---
title: "Cancel Block Trade Order (TRADE)"
url: https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade/Cancel-Block-Trade-Order
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:46:27.509Z
---
# Cancel Block Trade Order (TRADE)

> Source: https://developers.binance.com/docs/derivatives/options-trading/market-maker-block-trade/Cancel-Block-Trade-Order

# Cancel Block Trade Order (TRADE)

## API Description

Cancel a block trade order.

## HTTP Request

DELETE `eapi/v1/block/order/create`

## Request Weight

**5**

## Request Parameters

| Name | Type | Mandatory |  Description |
| --- | --- | --- | --- |
| blockOrderMatchingKey | STRING | YES |  |
| recvWindow | INT | NO | The value cannot be greater than 60000 |
| timestamp | INT | YES |  |

## Response Example

```json
{}
```
