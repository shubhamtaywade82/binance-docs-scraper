---
title: "Query Margin Loan Record(USER_DATA)"
url: https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-Margin-Loan-Record
kind: rate_limits
category: docs
source: binance
scraped_at: 2026-05-28T18:41:55.610Z
---
# Query Margin Loan Record(USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/portfolio-margin/account/Query-Margin-Loan-Record>

# Query Margin Loan Record(USER\_DATA)

## API Description

Query margin loan record

## HTTP Request

GET `/papi/v1/margin/marginLoan`

## Request Weight

**10**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| asset | STRING | YES |  |
| txId | LONG | NO | the `tranId` in `POST/papi/v1/marginLoan` |
| startTime | LONG | NO |  |
| endTime | LONG | NO |  |
| current | LONG | NO | Currently querying page. Start from 1. Default:1 |
| size | LONG | NO | Default:10 Max:100 |
| archived | STRING | NO | Default: `false`. Set to `true` for archived data from 6 months ago |
| recvWindow | LONG | NO | The value cannot be greater than 60000 |
| timestamp | LONG | YES |  |

> - txId or startTime must be sent. txId takes precedence.
> - Response in descending order
> - The max interval between `startTime` and `endTime` is 30 days.
> - If `startTime` and `endTime` not sent, return records of the last 7 days by default
> - Set `archived` to `true` to query data from 6 months ago

## Response Example

```json
{
  "rows": [
    {
      "txId": 12807067523,
      "asset": "BNB",
      "principal": "0.84624403",
      "timestamp": 1555056425000,
      "status": "CONFIRMED"
    }
  ],
  "total": 1
}
```
