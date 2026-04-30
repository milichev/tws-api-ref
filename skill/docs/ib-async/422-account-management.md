### Account Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for managing and retrieving account information, positions, and summaries.

```APIDOC
## POST /reqManagedAccts

### Description
Retrieves a list of managed accounts.

### Method
POST

### Endpoint
/reqManagedAccts

### Response
#### Success Response (200)
- **accounts** (array) - List of managed account identifiers.

#### Response Example
```json
{
  "accounts": [
    "DU123456",
    "DU789012"
  ]
}
```

## POST /reqPositions

### Description
Retrieves current positions across all accounts.

### Method
POST

### Endpoint
/reqPositions

### Response
#### Success Response (200)
- **positions** (array) - List of current positions.

#### Response Example
```json
{
  "positions": [
    {
      "account": "DU123456",
      "symbol": "AAPL",
      "quantity": 100,
      "marketPrice": 150.00
    }
  ]
}
```

## POST /cancelPositions

### Description
Cancels the retrieval of current positions.

### Method
POST

### Endpoint
/cancelPositions

## POST /reqAccountSummary

### Description
Retrieves a summary of account information.

### Method
POST

### Endpoint
/reqAccountSummary

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_groupName_** (string) - Optional - The name of the account group to summarize.
- **_tags_** (string) - Optional - Comma-separated list of tags for specific summary fields.

### Response
#### Success Response (200)
- **summary** (object) - Account summary details.

#### Response Example
```json
{
  "summary": {
    "NetLiquidation": 100000.00,
    "BuyingPower": 50000.00
  }
}
```

## POST /cancelAccountSummary

### Description
Cancels the retrieval of account summary information.

### Method
POST

### Endpoint
/cancelAccountSummary

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqPositionsMulti

### Description
Retrieves positions for a specific account and model.

### Method
POST

### Endpoint
/reqPositionsMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering positions.

### Response
#### Success Response (200)
- **positions** (array) - List of positions for the specified account and model.

#### Response Example
```json
{
  "positions": [
    {
      "symbol": "IBM",
      "quantity": 50,
      "marketPrice": 130.00
    }
  ]
}
```

## POST /cancelPositionsMulti

### Description
Cancels the retrieval of multi-account positions.

### Method
POST

### Endpoint
/cancelPositionsMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqAccountUpdatesMulti

### Description
Subscribes to account updates for a specific account and model.

### Method
POST

### Endpoint
/reqAccountUpdatesMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering updates.
- **_ledgerAndNLV_** (boolean) - Optional - Whether to include ledger and Net Liquidation Value updates.

### Response
#### Success Response (200)
- **update** (object) - Account update information.

#### Response Example
```json
{
  "update": {
    "account": "DU123456",
    "equity": 105000.00,
    "realtimePnL": 500.00
  }
}
```

## POST /cancelAccountUpdatesMulti

### Description
Cancels the subscription to multi-account updates.

### Method
POST

### Endpoint
/cancelAccountUpdatesMulti

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqPnL

### Description
Retrieves Profit and Loss (PnL) information for an account.

### Method
POST

### Endpoint
/reqPnL

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering PnL.

### Response
#### Success Response (200)
- **pnl** (array) - List of PnL data.

#### Response Example
```json
{
  "pnl": [
    {
      "conid": 12345678,
      "pnl": 250.75,
      "dayPnL": 50.25
    }
  ]
}
```

## POST /cancelPnL

### Description
Cancels the retrieval of PnL information.

### Method
POST

### Endpoint
/cancelPnL

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqPnLSingle

### Description
Retrieves single PnL information for a specific contract within an account.

### Method
POST

### Endpoint
/reqPnLSingle

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_account_** (string) - Required - The account identifier.
- **_modelCode_** (string) - Optional - The model code for filtering PnL.
- **_conid_** (integer) - Required - The contract identifier.

### Response
#### Success Response (200)
- **pnlSingle** (object) - Single PnL data for the specified contract.

#### Response Example
```json
{
  "pnlSingle": {
    "conid": 12345678,
    "pnl": 120.50,
    "dayPnL": 20.00
  }
}
```

## POST /cancelPnLSingle

### Description
Cancels the retrieval of single PnL information.

### Method
POST

### Endpoint
/cancelPnLSingle

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request to cancel.

## POST /reqCompletedOrders

### Description
Retrieves completed orders.

### Method
POST

### Endpoint
/reqCompletedOrders

### Parameters
#### Query Parameters
- **_apiOnly_** (boolean) - Optional - Filters for orders placed via API.

### Response
#### Success Response (200)
- **orders** (array) - List of completed orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12347,
      "status": "Filled",
      "averagePrice": 99.75
    }
  ]
}
```
```
