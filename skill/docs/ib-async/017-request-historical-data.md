### Request Historical Data

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Fetches historical market data for a specified contract. This example requests hourly midpoint data for EURUSD for the last 30 days and converts it into a pandas DataFrame. Ensure pandas is installed.

```python
from ib_async import *
# util.startLoop()  # uncomment this line when in a notebook

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Request historical data
contract = Forex('EURUSD')
bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='30 D',
    barSizeSetting='1 hour', whatToShow='MIDPOINT', useRTH=True)

# Convert to pandas dataframe (pandas needs to be installed):
df = util.df(bars)
print(df.head())
```
