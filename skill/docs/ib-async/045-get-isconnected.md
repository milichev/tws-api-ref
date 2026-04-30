### GET /isConnected

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Checks the current status of the API connection to the TWS or IB Gateway.

```APIDOC
## GET /isConnected

### Description
Returns a boolean indicating whether the client is currently connected to the TWS or IB Gateway.

### Method
GET

### Endpoint
/isConnected

### Response
#### Success Response (200)
- **connected** (bool) - True if connected, false otherwise
```
