### Historical Data and Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for retrieving historical tick data and head timestamps.

```APIDOC
## GET /reqHistoricalTicks

### Description
Requests historical tick data for a specific contract within a defined time range.

### Method
GET

### Parameters
#### Query Parameters
- **reqId** (int) - Required - Unique request identifier.
- **contract** (object) - Required - Contract details.
- **startDateTime** (string) - Required - Start time of the range.
- **endDateTime** (string) - Required - End time of the range.

### Response
#### Success Response (200)
- **ticks** (array) - List of historical tick data points.
```
