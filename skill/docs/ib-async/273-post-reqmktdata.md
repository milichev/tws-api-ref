### POST /reqMktData

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests market data for a specific contract. Supports snapshot requests and combo legs.

```APIDOC
## POST /reqMktData

### Description
Subscribes to market data for a given contract. The request can be configured for snapshots or regulatory snapshots.

### Method
POST

### Endpoint
/reqMktData

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique identifier for the market data request.
- **contract** (object) - Required - The contract object containing symbol, exchange, and security type.
- **genericTickList** (string) - Required - Comma-separated list of generic tick types.
- **snapshot** (bool) - Required - If true, returns a single snapshot instead of a stream.
- **regulatorySnapshot** (bool) - Required - If true, includes regulatory snapshot data.
- **mktDataOptions** (list) - Required - Additional market data options.

### Request Example
{
  "reqId": 1001,
  "contract": { "symbol": "AAPL", "secType": "STK", "exchange": "SMART" },
  "genericTickList": "100,101",
  "snapshot": false,
  "regulatorySnapshot": false,
  "mktDataOptions": []
}
```
