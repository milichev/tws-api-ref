### CFD Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes a Contract For Difference (CFD) object. Parameters include symbol, exchange, and currency. Additional keyword arguments can be passed.

```python
from ib_async.contract import CFD

cfd = CFD(symbol='ES', exchange='NYMEX', currency='USD')
```
