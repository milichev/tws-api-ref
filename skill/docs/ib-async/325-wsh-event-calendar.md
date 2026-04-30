### WSH Event Calendar

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Queries corporate event data such as earnings dates and board meetings using the Wall Street Horizon API integration.

```python
from ib_async import *
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

ibm = Stock('IBM', 'SMART', 'USD')
ib.qualifyContracts(ibm)

data = WshEventData(
    filter = '''{
      "country": "All",
      "watchlist": ["8314"],
      "limit_region": 10,
      "limit": 10,
      "wshe_ed": "true",
      "wshe_bod": "true"
    }''')
events = ib.getWshEventData(data)
print(events)
```
