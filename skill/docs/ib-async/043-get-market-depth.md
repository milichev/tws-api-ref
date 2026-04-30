### GET /market-depth

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribe to real-time market depth (L2/Order Book) data for a specific contract.

```APIDOC
## GET /market-depth

### Description
Subscribe to market depth data (DOM) for a given contract. Returns a Ticker object containing bids, asks, and depth ticks.

### Method
GET

### Endpoint
/market-depth

### Parameters
#### Query Parameters
- **contract** (Contract) - Required - The contract of interest.
- **numRows** (int) - Optional - Number of depth levels (max 5).
- **isSmartDepth** (bool) - Optional - Consolidate order book across exchanges.

### Response
#### Success Response (200)
- **Ticker** (Object) - Ticker object containing domBids, domAsks, and domTicks.

### Response Example
{
  "ticker": "TickerObject",
  "domBids": [],
  "domAsks": []
}
```
