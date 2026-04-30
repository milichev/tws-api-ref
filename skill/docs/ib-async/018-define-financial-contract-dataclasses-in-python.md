### Define Financial Contract Dataclasses in Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Examples of initializing various financial contract types such as Stock, Option, Future, and Continuous Future using the ib_async library.

```python
from ib_async.contract import Stock, Option, Future, ContFuture

stock = Stock(symbol='AAPL', exchange='SMART', currency='USD')
option = Option(symbol='AAPL', lastTradeDateOrContractMonth='20231215', strike=150.0, right='C')
future = Future(symbol='ES', lastTradeDateOrContractMonth='202312', exchange='GLOBEX')
cont_future = ContFuture(symbol='ES', exchange='GLOBEX')
```
