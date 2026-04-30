### Fetching consecutive historical data with ib_async

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Demonstrates how to iteratively request historical bar data by updating the endDateTime until no more data is returned. The results are aggregated and converted into a pandas DataFrame for CSV export.

```python
import datetime
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

contract = Stock('TSLA', 'SMART', 'USD')

dt = ''
barsList = []
while True:
    bars = ib.reqHistoricalData(
        contract,
        endDateTime=dt,
        durationStr='10 D',
        barSizeSetting='1 min',
        whatToShow='MIDPOINT',
        useRTH=True,
        formatDate=1)
    if not bars:
        break
    barsList.append(bars)
    dt = bars[0].date
    print(dt)

# save to CSV file
allBars = [b for bars in reversed(barsList) for b in bars]
df = util.df(allBars)
df.to_csv(contract.symbol + '.csv', index=False)
```
