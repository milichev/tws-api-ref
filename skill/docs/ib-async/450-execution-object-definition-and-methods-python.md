### Execution Object Definition and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the Execution object, capturing details of a trade execution. Includes attributes for execution ID, time, account, exchange, side, shares, price, and more. Offers methods to convert to a dictionary, retrieve non-default values, convert to a tuple, and update the object.

```python
import datetime

class Execution:
    def __init__(self, execId='', time=datetime.datetime(1970, 1, 1, 0, 0, tzinfo=datetime.timezone.utc), acctNumber='', exchange='', side='', shares=0.0, price=0.0, permId=0, clientId=0, orderId=0, liquidation=0, cumQty=0.0, avgPrice=0.0, orderRef='', evRule='', evMultiplier=0.0, modelCode='', lastLiquidity=0, pendingPriceRevision=False):
        # ... attributes ...
        pass

    def dict(self) -> dict:
        # ... implementation ...
        pass

    def nonDefaults(self) -> dict:
        # ... implementation ...
        pass

    def tuple(self) -> tuple:
        # ... implementation ...
        pass

    def update(self, *srcObjs, **kwargs):
        # ... implementation ...
        pass
```
