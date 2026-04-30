### GET /historical-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests historical bar data for a specific contract asynchronously.

```APIDOC
## GET /historical-data

### Description
Retrieves historical bar data for a given contract. Supports real-time updates via the keepUpToDate flag.

### Method
GET

### Parameters
#### Request Body
- **contract** (Contract) - Required - The financial instrument contract.
- **endDateTime** (str) - Required - The end date and time for the data.
- **durationStr** (str) - Required - The duration of the data (e.g., '1 D').
- **barSizeSetting** (str) - Required - The size of the bars (e.g., '1 min').
- **whatToShow** (str) - Required - Type of data (e.g., 'TRADES').
- **useRTH** (bool) - Required - Use Regular Trading Hours.
- **keepUpToDate** (bool) - Optional - Whether to subscribe to real-time updates.

### Response
#### Success Response (200)
- **BarDataList** (object) - A list containing the requested historical bars.
```
