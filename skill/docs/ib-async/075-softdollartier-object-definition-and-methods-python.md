### SoftDollarTier Object Definition and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the SoftDollarTier object with name, value, and display name. Provides methods for converting the object to a dictionary, getting non-default fields, converting to a tuple, and updating the object's properties.

```python
class SoftDollarTier:
    def __init__(self, name='', val='', displayName=''):
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
