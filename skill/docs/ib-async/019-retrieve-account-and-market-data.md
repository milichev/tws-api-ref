### Retrieve Account and Market Data

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Examples for fetching account summaries, historical market data, and live market data updates. Historical data can be converted into pandas DataFrames for analysis.

```python
# Account Summary
account = ib.managedAccounts()[0]
summary = ib.accountSummary(account)

# Historical Data
contract = Forex('EURUSD')
bars = ib.reqHistoricalData(contract, endDateTime='', durationStr='30 D', barSizeSetting='1 hour', whatToShow='MIDPOINT', useRTH=True)
df = util.df(bars)

# Live Market Data
ticker = ib.reqMktData(Stock('AAPL', 'SMART', 'USD'), '', False, False)
```
