[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [30 Wall Street Horizon](30-wsh.md)


## Wall Street Horizon

Calendar and Event data can be retrieved from the Wall Street Horizon Event Calendar and accessed via the TWS API through the functions IBApi.EClient.reqWshMetaData and IBApi.EClient.reqWshEventData.

It is necessary to have the **Wall Street Horizon Corporate Event Data** research subscription activated first in [Account Management](https://www.ibkrguides.com/clientportal/usersettings/marketdatasubscriptions.htm).

WSH provides IBKR with corporate event datasets, including earnings dates, dividend dates, options expiration dates, splits, spinoffs and a wide variety of investor-related conferences.

[Data Classes and Fields PDF](https://www.interactivebrokers.com/campus/wp-content/uploads/sites/2/2023/09/WSHEclassesandfieldsforIBAPI2022-12-23.pdf)

### Meta Data

The function IBApi.EClient.reqWshMetaData is used to request available event types, or supported filter values, that may be used in the call for [EClient.reqWshEventData()](../undefined/index.md) filter field.

Regardless of whether or not you are aware of the Meta Data filters, this request must **always** be called once per session prior to the [EClient.reqWshEventData()](../undefined/index.md) function.

### Meta Data Filters

While this list contains an array of Meta Data filters that may be used, please be aware that new values may be made available or removed without notice.

In addition to the EClient.reqWshMetaData field being mandatory prior to the [EClient.reqWshEventData()](../undefined/index.md) function, the JSON content will also return the appropriate column values that are returned along with the function.

| Event Type Name | Event Type Tag |
| --- | --- |
| Board of Directors Meeting | wshe_bod |
| Buyback | wshe_bybk |
| BuyBack Modification | wshe_bybkmod |
| Conference Call | wshe_cc |
| FDA Advisory Committee Meeting | wshe_fda_adv_comm |
| Future Quarter | wshe_fq |
| Investors Conference | wshe_ic |
| Index Change | wshe_idx |
| Interim Dates | wshe_interim_dates |
| Initial Public Offering | wshe_ipo |
| Movie Release | wshe_movies |
| Option Expiration Date | wshe_option |
| Merger and Acquistion | wshe_merg_acq |
| Quarter End | wshe_qe |
| Secondary Offering | wshe_secondary |
| Video Release | wshe_videos |
| Splits | wshe_splits |
| Spinoff | wshe_spinoffs |
| Shareholder Meeting | wshe_sh |
| Filing Due Date | wshe_sec |
| WSHE Dividend | wshe_div |
| Dividends Suspend/Resume | wshe_divsr |
| Earnings Date | wshe_ed |
| Earnings Report | wshe_eps |

### Requesting Meta Data

#### 30.01.02 Requesting Meta Data

**requestId:** int. Request identifier used to track data.  
)

Requests metadata from the WSH calendar.

```python
self.reqWshMetaData(1100)
```

### Receive Meta Data

#### 30.01.03 Receive Meta Data

**requestId:** int. Request identifier used to track data.

**dataJson:** String. metadata in json format.  
)

Returns meta data from the WSH calendar

```python
def wshMetaData(self, reqId: int, dataJson: str):
	print("WshMetaData.", "ReqId:", reqId, "Data JSON:", dataJson)
```

Once the json content has been received, the specific event types used to filter [EClient.reqWshEventData()](../undefined/index.md) are listed under “meta\_data” -> “event\_types”.

The “name” field will express what the filter will return, such as “Board of Directors Meeting”

The “tag” field will return the filter used in your JSON query. The related example would be “wshe\_bod”.

### Cancel Meta Data

#### 30.01.04 Cancel Meta Data

**requestId:** int. Request identifier used to track data.  
)

Cancels pending request for WSH metadata.

```python
self.cancelWshMetaData(1100)
```

### Event Data

The function EClient.reqWshEventData is used to request various calendar events from Wall Street Horizon. The event data is then received via the callback EWrapper.wshEventData. Pending event data requests can be canceled with the function IBApi.EClient.cancelWshEventData.

**Note:** Prior to sending this message, the API client must make a request for metadata via [EClient.reqWshMetaData](30.01-meta-data).

Also note that TWS will not support multiple concurrent requests. Previous request should succeed, fail, or be cancelled by client before next one. TWS will reject such requests with text “Duplicate WSH meta-data request” or “Duplicate WSH event request”.

### WshEventData Object

When making a request to the Wall Street Horizons Event Calendar with the API, users must create a wshEventData Object. This object contains several fields, along with a filter field, which takes a json-formatted string. The filter values are returned from WSH Meta Data requests.

When creating the object, users are able to specify either the WshEventData.conId, WshEventData.startDate, and WshEventData.endDate, or they may choose to use the WshEventData.filter value. Attempting to use both will result in an error. 

Only one Event Type tag may be passed per request. Multiple submitted filters will be ignored beyond the final request.

#### 30.02.01 WshEventData Object

**conId:** String. Specify the contract identifier for the event request.

**startDate:** String. Specify the start date of the event requests. Formatted as “YYYYMMDD”

**endDate:** String. Specify the end date of the event requests. Formatted as “YYYYMMDD”

**fillCompetitors:** bool. Automatically fill in competitor values of existing positions.

**fillPortfolio:** bool. Automatically fill in portfolio values.

**fillWatchlist:** bool. Automatically fill in watchlist values.

**totalLimit:** int. Maximum of 100.

**filter:** String. Json-formatted string containing all filter values. Some available values include:

*   watchlist: Array of string. Takes a single conid.
*   country: String. Specify a country code, or “All”.
*   [EClient.reqWshMetaData()](../undefined/index.md) responses will include an Event Type tag which can be used to filter the Event Data’s response. The Json field is a boolean that can only take true to filter the given value

### Request Event Data

#### 30.02.02 Request Event Data

**requestId:** int. Request identifier used to track data.

**wshEventData:** WshEventData. Unique object used to track all parameters for the event data request. See [WshEventData Object](30.02.01-wsheventdata-object) for more details.  
)

**MIN\_SERVER\_VER\_WSH\_EVENT\_DATA\_FILTERS\_DATE:** \*Only passed in the Python implementation. Server version of the API implementationmust be passed. This can be accomplished with the EClient.serverVersion() function call.

Requests event data from the WSH calendar.

```python
self.reqWshEventData(1101, eventDataObj, serverVersion)
```

### Receive Event Data

#### 30.02.03 Receive Event Data

**requestId:** int. Request identifier used to track data.

**dataJson:** String. Event data json format.  
)

Returns calendar events from the WSH.

```python
def wshEventData(self, reqId: int, dataJson: str):
	print("WshEventData.", "ReqId:", reqId, "Data JSON:", dataJson)
```

### Cancel Event Data

#### 30.02.04 Cancel Event Data

**requestId:** int. Request identifier used to track data.

)

Cancels pending WSH event data request.

```python
self.cancelWshEventData(1101, eventDataObj)
```
