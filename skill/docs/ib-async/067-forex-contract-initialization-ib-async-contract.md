### Forex Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes a Forex contract object. Parameters include pair, exchange, symbol, and currency. The `pair` parameter is a shortcut for `symbol` and `currency`. Additional keyword arguments can be passed.

```python
from ib_async.contract import Forex

forex = Forex(pair='EURUSD', exchange='IDEALPRO', symbol='EUR', currency='USD')
```
