---
title: "Query Margin Account's OCO (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Margin-Account-OCO
kind: examples
category: docs
source: binance
scraped_at: 2026-05-28T18:53:20.553Z
---
# Query Margin Account's OCO (USER_DATA)

> Source: https://developers.binance.com/docs/derivatives/portfolio-margin/trade/Query-Margin-Account-OCO

# Query Margin Account's OCO (USER\_DATA)

## API Description

Retrieves a specific OCO based on provided optional parameters

## HTTP Request

GET `/papi/v1/margin/orderList`

## Weight

**5**

## Parameters:

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| orderListId | LONG | NO | Either orderListId or origClientOrderId must be provided |
| origClientOrderId | STRING | NO | Either orderListId or origClientOrderId must be provided |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

## Response:

```json
{
  "orderListId": 27,
  "contingencyType": "OCO",
  "listStatusType": "EXEC_STARTED",
  "listOrderStatus": "EXECUTING",
  "listClientOrderId": "h2USkA5YQpaXHPIrkd96xE",
  "transactionTime": 1565245656253,
  "symbol": "LTCBTC",
  "orders": [
    {
      "symbol": "LTCBTC",
      "orderId": 4,
      "clientOrderId": "qD1gy3kc3Gx0rihm9Y3xwS"
    },
    {
      "symbol": "LTCBTC",
      "orderId": 5,
      "clientOrderId": "ARzZ9I00CPM8i3NhmU9Ega"
    }
  ]
}
```
