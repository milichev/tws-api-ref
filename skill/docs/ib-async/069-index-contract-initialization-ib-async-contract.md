### Index Contract Initialization (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes an Index contract object. Parameters include symbol, exchange, and currency. Additional keyword arguments can be passed.

```python
from ib_async.contract import Index

index = Index(symbol='SPX', exchange='SMART', currency='USD')
```
