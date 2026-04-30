### Define Bond Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Bond contract. It inherits from the base Contract class and accepts arbitrary keyword arguments for its initialization.

```python
class Bond(Contract):
    def __init__(self, **kwargs):
        """Bond."""
        Contract.__init__(self, "BOND", **kwargs)
```
