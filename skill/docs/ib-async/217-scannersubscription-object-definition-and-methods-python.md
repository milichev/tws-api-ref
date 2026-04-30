### ScannerSubscription Object Definition and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the ScannerSubscription object with various parameters for market scanning. Includes methods to convert the object to a dictionary, retrieve non-default values as a dictionary, convert to a tuple, and update its fields.

```python
class ScannerSubscription:
    def __init__(self, _numberOfRows=-1, _instrument='', _locationCode='', _scanCode='', _abovePrice=1.7976931348623157e+308, _belowPrice=1.7976931348623157e+308, _aboveVolume=2147483647, _marketCapAbove=1.7976931348623157e+308, _marketCapBelow=1.7976931348623157e+308, _moodyRatingAbove='', _moodyRatingBelow='', _spRatingAbove='', _spRatingBelow='', _maturityDateAbove='', _maturityDateBelow='', _couponRateAbove=1.7976931348623157e+308, _couponRateBelow=1.7976931348623157e+308, _excludeConvertible=False, _averageOptionVolumeAbove=2147483647, _scannerSettingPairs='', _stockTypeFilter=''):
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
