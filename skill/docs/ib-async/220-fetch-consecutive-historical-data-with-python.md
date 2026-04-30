### Fetch consecutive historical data with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Demonstrates how to iteratively request historical bar data for a contract by moving backward in time. It collects the data into a list and exports the final result to a CSV file.

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

allBars = [b for bars in reversed(barsList) for b in bars]
df = util.df(allBars)
df.to_csv(contract.symbol + '.csv', index=False)
```
