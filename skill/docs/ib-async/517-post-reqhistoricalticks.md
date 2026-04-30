### POST /reqHistoricalTicks

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests historical tick data with one-second resolution.

```APIDOC
## POST /reqHistoricalTicks

### Description
Requests historical ticks for a contract. Returns a list of tick data.

### Method
POST

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract to query.
- **startDateTime** (str) - Required - Start time.
- **endDateTime** (str) - Required - End time.
- **numberOfTicks** (int) - Required - Max 1000 ticks.
- **whatToShow** (str) - Required - 'Bid_Ask', 'Midpoint', or 'Trades'.

### Response
#### Success Response (200)
- **list** (Array) - List of historical ticks.
```
