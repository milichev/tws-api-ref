### GET /historical-ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests historical tick data for a specific contract within a time range.

```APIDOC
## GET /historical-ticks

### Description
Fetches historical tick data for a contract between two timestamps.

### Method
GET

### Parameters
#### Request Body
- **contract** (Contract) - Required - The financial instrument contract.
- **startDateTime** (str) - Required - Start time.
- **endDateTime** (str) - Required - End time.
- **numberOfTicks** (int) - Required - Number of ticks to retrieve.
- **whatToShow** (str) - Required - Type of tick data.

### Response
#### Success Response (200)
- **list** (array) - A list of historical tick objects.
```
