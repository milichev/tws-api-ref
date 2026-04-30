### IBDefaults Class Definition

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides default values for common API data fields, such as prices, sizes, unset values, and timezones. This class simplifies data population by offering predefined constants.

```python
from ib_async.objects import IBDefaults

_class _ib_async.objects.IBDefaults(_emptyPrice =-1_, _emptySize =0_, _unset =nan_, _timezone =datetime.timezone.utc_)[source]
    
    A simple way to provide default values when populating API data. 

    emptyPrice _: `Any`__ = -1_ 
    
    emptySize _: `Any`__ = 0_ 
    
    unset _: `Any`__ = nan_ 
    
    timezone _: `tzinfo`__ = datetime.timezone.utc_ 
    
```
