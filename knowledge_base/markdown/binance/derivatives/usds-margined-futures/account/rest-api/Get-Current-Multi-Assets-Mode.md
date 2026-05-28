---
title: "Get Current Multi-Assets Mode (USER_DATA)"
url: https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Current-Multi-Assets-Mode
kind: rest_endpoint
category: docs
source: binance
scraped_at: 2026-05-28T18:55:49.677Z
---
# Get Current Multi-Assets Mode (USER_DATA)

> Source: <https://developers.binance.com/docs/derivatives/usds-margined-futures/account/rest-api/Get-Current-Multi-Assets-Mode>

# Get Current Multi-Assets Mode (USER\_DATA)

## API Description

Get user's Multi-Assets mode (Multi-Assets Mode or Single-Asset Mode) on _**Every symbol**_

## HTTP Request

GET `/fapi/v1/multiAssetsMargin`

## Request Weight

**30**

## Request Parameters

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recvWindow | LONG | NO |  |
| timestamp | LONG | YES |  |

## Response Example

```json
{
  "multiAssetsMargin": true
}
```
