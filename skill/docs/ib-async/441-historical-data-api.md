### Historical Data API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This API allows you to request historical bar data for a specified contract. You can define the end date/time, duration, bar size, data source, and whether to use regular trading hours.

```APIDOC
## POST /api/historicalData

### Description
Request historical bar data. This method is blocking.

### Method
POST

### Endpoint
/api/historicalData

### Parameters
#### Path Parameters
None

#### Query Parameters
* **contract** (Contract) - Required - Contract of interest.
* **endDateTime** (datetime.datetime | datetime.date | str | None) - Optional - Can be set to '' to indicate the current time, or it can be given as a datetime.date or datetime.datetime, or it can be given as a string in 'yyyyMMdd HH:mm:ss' format. If no timezone is given then the TWS login timezone is used.
* **durationStr** (str) - Required - Time span of all the bars. Examples: '60 S', '30 D', '13 W', '6 M', '10 Y'.
* **barSizeSetting** (str) - Required - Time period of one bar. Must be one of: '1 secs', '5 secs', '10 secs' 15 secs', '30 secs', '1 min', '2 mins', '3 mins', '5 mins', '10 mins', '15 mins', '20 mins', '30 mins', '1 hour', '2 hours', '3 hours', '4 hours', '8 hours', '1 day', '1 week', '1 month'.
* **whatToShow** (str) - Required - Specifies the source for constructing bars. Must be one of: 'TRADES', 'MIDPOINT', 'BID', 'ASK', 'BID_ASK', 'ADJUSTED_LAST', 'HISTORICAL_VOLATILITY', 'OPTION_IMPLIED_VOLATILITY', 'REBATE_RATE', 'FEE_RATE', 'YIELD_BID', 'YIELD_ASK', 'YIELD_BID_ASK', 'YIELD_LAST'. For 'SCHEDULE' use :meth:`.reqHistoricalSchedule`.
* **useRTH** (bool) - Required - If True then only show data from within Regular Trading Hours, if False then show all data.
* **formatDate** (int) - Optional - For an intraday request setting to 2 will cause the returned date fields to be timezone-aware datetime.datetime with UTC timezone, instead of local timezone as used by TWS. Defaults to 1.
* **keepUpToDate** (bool) - Optional - If True then a realtime subscription is started to keep the bars updated; ``endDateTime`` must be set empty ('') then. Defaults to False.
* **chartOptions** (list[TagValue]) - Optional - Unknown.
* **timeout** (float) - Optional - Timeout in seconds after which to cancel the request and return an empty bar series. Set to ``0`` to wait indefinitely. Defaults to 60.

### Request Example
```json
{
  "contract": {"symbol": "IBM", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "endDateTime": "",
  "durationStr": "1 M",
  "barSizeSetting": "1 day",
  "whatToShow": "TRADES",
  "useRTH": true,
  "formatDate": 1,
  "keepUpToDate": false,
  "chartOptions": [],
  "timeout": 60
}
```

### Response
#### Success Response (200)
- **bars** (BarDataList) - A list of historical bar data.

#### Response Example
```json
{
  "bars": [
    {
      "date": "20230101 00:00:00",
      "open": 130.0,
      "high": 131.0,
      "low": 129.5,
      "close": 130.5,
      "volume": 1000000,
      "barCount": 1,
      "average": 130.25,
      "hasGaps": false
    }
  ]
}
```
```
