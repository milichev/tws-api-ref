### POST /cancelMktData

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Cancels an active market data subscription.

```APIDOC
## POST /cancelMktData

### Description
Stops the market data stream for the specified request ID.

### Method
POST

### Endpoint
/cancelMktData

### Parameters
#### Request Body
- **reqId** (int) - Required - The ID of the market data request to cancel.

### Request Example
{
  "reqId": 1001
}
```
