### POST /reqHistoricalData

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests historical bar data for a given contract. This is a blocking call.

```APIDOC
## POST /reqHistoricalData

### Description
Retrieves historical bar data. Supports keepUpToDate for real-time updates.

### Method
POST

### Parameters
#### Request Body
- **contract** (Contract) - Required - Contract of interest.
- **endDateTime** (str) - Required - End time in 'yyyyMMdd HH:mm:ss' format.
- **durationStr** (str) - Required - Time span (e.g., '60 S', '10 Y').
- **barSizeSetting** (str) - Required - Time period of one bar.
- **whatToShow** (str) - Required - Data source type.
- **useRTH** (bool) - Required - Filter by Regular Trading Hours.
- **keepUpToDate** (bool) - Optional - Start real-time subscription.

### Response
#### Success Response (200)
- **BarDataList** (Object) - Historical bar data series.
```
