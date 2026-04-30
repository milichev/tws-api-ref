### GET /reqContractDetails

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves detailed information for a specific contract.

```APIDOC
## GET /reqContractDetails

### Description
Get a list of contract details that match the given contract. If the list is empty, the contract is unknown.

### Method
GET

### Endpoint
/reqContractDetails

### Parameters
#### Request Body
- **contract** (Contract) - Required - The contract object to query.

### Response
#### Success Response (200)
- **details** (list[ContractDetails]) - A list of matching contract details.

#### Response Example
[
  { "symbol": "AAPL", "secType": "STK", "exchange": "SMART" }
]
```
