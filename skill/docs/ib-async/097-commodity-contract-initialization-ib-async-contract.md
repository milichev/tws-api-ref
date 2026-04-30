### Commodity Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes a Commodity contract object. Parameters include symbol, exchange, and currency. Additional keyword arguments can be passed.

```python
from ib_async.contract import Commodity

commodity = Commodity(symbol='CL', exchange='NYMEX', currency='USD')
```
