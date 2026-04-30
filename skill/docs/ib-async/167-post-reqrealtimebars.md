### POST /reqRealTimeBars

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests real-time bar data for a specific contract. Returns a RealTimeBarList object.

```APIDOC
## POST /reqRealTimeBars

### Description
Requests real-time bar data for a specific contract. The barSize must be 5.

### Method
POST

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract of interest.
- **barSize** (int) - Required - Must be 5.
- **whatToShow** (str) - Required - Source for bars: 'TRADES', 'MIDPOINT', 'BID', or 'ASK'.
- **useRTH** (bool) - Required - If True, only Regular Trading Hours data.
- **realTimeBarsOptions** (list) - Optional - Additional tag values.

### Response
#### Success Response (200)
- **RealTimeBarList** (Object) - The list of real-time bars.
```
