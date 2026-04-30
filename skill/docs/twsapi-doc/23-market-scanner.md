[IBKR TWS API](../../SKILL.md) · [TWS API Documentation](index.md) · [23 Market Scanner](23-market-scanner.md)


## Market Scanner

Some scans in the TWS Advanced Market Scanner can be accessed via the TWS API through the EClient.reqScannerSubscription.

Results are delivered via EWrapper.scannerData and the EWrapper.scannerDataEnd marker will indicate when all results have been delivered. The returned results to scannerData simply consist of a list of contracts. There are no market data fields (bid, ask, last, volume, …) returned from the scanner, and so if these are desired they have to be requested separately with the reqMktData function. Since the scanner results do not include any market data fields, it is not necessary to have market data subscriptions to use the API scanner. However to use filters, market data subscriptions are generally required.

Since the EClient.reqScannerSubscription request keeps a subscription open you will keep receiving periodic updates until the request is cancelled via EClient.cancelScannerSubscription :

Scans are limited to a maximum result of 50 results per scan code, and only 10 API scans can be active at a time.

scannerSubscriptionFilterOptions has been added to the API to allow for generic filters. This field is entered as a list of TagValues which have a tag followed by its value, e.g. TagValue(“usdMarketCapAbove”, “10000”) indicates a market cap above 10000 USD. Available filters can be found using the EClient.reqScannerParameters function.

A string containing all available XML-formatted parameters will then be returned via EWrapper.scannerParameters.

**Important:** remember the TWS API is just an interface to the TWS. If you are having problems defining a scanner, always make sure you can create a similar scanner using the TWS’ [Advanced Market Scanner](https://ibkrguides.com/tws/usersguidebook/mosaic/advancedscanner.htm).

### Market Scanner Parameters

A string containing all available XML-formatted parameters will then be returned via EWrapper.scannerParameters.

### Request Market Scanner Parameters

#### 23.01.01 Request Market Scanner Parameters

Requests an XML list of scanner parameters valid in TWS.

```python
self.reqScannerParameters()
```

### Receive Market Scanner Parameters

#### 23.01.02 Receive Market Scanner Parameters

**xml:** String. The xml-formatted string with the available parameters.  
)

Provides the xml-formatted parameters available from TWS market scanners (not all available in API).

```python
def scannerParameters(self, xml: str):
	open('log/scanner.xml', 'w').write(xml)
	print("ScannerParameters received.")
```

### Market Scanner Subscription

All values used for the ScannerSubscription object are pulled from EClient.scannerParams response. The XML tree will relay a tree containing a corresponding code to each ScannerSubscription field as documented below.

**instrument:** `<ScanParameterResponse> <InstrumentList> <Instrument> <type>`

**Location Code:** `<ScanParameterResponse> <LocationTree> <Location> <LocationTree> <Location> <locationCode>`

**Scan Code:** `<ScanParameterResponse> <ScanTypeList> <ScanType> <scanCode>`

**Subscription Options** should be an empty array of TagValues.

**Filter Options:** `<ScanParameterResponse> <FilterList> <RangeFilter> <AbstractField> <code>`

### 23.02 Market Scanner Subscription

**Instrument:** String. Instrument Type to use.

**Location Code:** String. Country or region for scanner to search.

**Scan Code:** String. Value for scanner to sort by.

**Subscription Options:** Array of TagValues. For internal use only.

**Filter Options:** Array of TagValues. Contains an array of TagValue objects which filters the scanner subscription.

### Request Market Scanner Subscription

#### 23.02.01 Request Market Scanner Subscription

**reqId:** int. Request identifier used for tracking data.

**subscription:** [ScannerSubscription](../undefined/index.md). Object containing details on what values should be used to construct and sort the list.

**scannerSubscriptionOptions:** List. Internal use only.

**scannerSubscriptionFilterOptions:** List. List of values used to filter the results of the scanner subscription. May result in an empty scanner response from over-filtering.  
)

Starts a subscription to market scan results based on the provided parameters.

```python
self.reqScannerSubscription(7002, scannerSubscription, [], filterTagvalues)
```

### Receive Market Scanner Subscription

#### 23.02.02 Receive Market Scanner Subscription

**reqid:** int. Request identifier used to track data.

**rank:** int. The ranking position of the contract in the scanner sort.

**contractDetails:** ContractDetails. Contract object of the resulting object.

**distance:** String. Internal use only.

**benchmark:** String. Internal use only.

**projection:** String. Internal use only.

**legStr:** String. Describes the combo legs when the scanner is returning EFP  
)

Provides the data resulting from the market scanner request.

```python
def scannerData(self, reqId: int, rank: int, contractDetails: ContractDetails, distance: str, benchmark: str, projection: str, legsStr: str):
	print("ScannerData. ReqId:", reqId, ScanData(contractDetails.contract, rank, distance, benchmark, projection, legsStr))
```

### Cancel Market Scanner Subscription

#### 23.02.03 Cancel Market Scanner Subscription

**tickerId:** int. Request identifier used to track data.  
)

Cancels the specified scanner subscription using the tickerId.

```python
self.cancelScannerSubscription(7003)
```
