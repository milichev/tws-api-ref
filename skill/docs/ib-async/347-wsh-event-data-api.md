### WSH Event Data API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for managing Wall Street Horizon (WSH) event data requests.

```APIDOC
## GET /reqWshEventData

### Description
Retrieves Wall Street Horizon event data based on provided filters and event criteria.

### Method
GET

### Parameters
#### Query Parameters
- **reqId** (int) - Required - Unique request identifier.
- **data** (WshEventData) - Required - Object containing conId, filter, and date ranges.

### Request Example
{
  "reqId": 1,
  "data": {
    "conId": 12345,
    "startDate": "20230101",
    "endDate": "20231231"
  }
}

### Response
#### Success Response (200)
- **data** (object) - WSH event details.
```
