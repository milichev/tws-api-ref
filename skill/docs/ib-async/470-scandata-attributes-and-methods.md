### ScanData Attributes and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section details the ScanData object, which represents results from a market scan. It includes attributes such as rank, contractDetails, distance, benchmark, projection, and legsStr. Methods like dict(), nonDefaults(), tuple(), and update() are available for data manipulation and retrieval.

```python
class ScanData:
    rank: int
    contractDetails: ContractDetails
    distance: float
    benchmark: str
    projection: float
    legsStr: str

    def dict(self) -> dict:
        """Returns a dictionary representation of the scan data."""
        pass

    def nonDefaults(self) -> dict:
        """Returns a dictionary of non-default attributes."""
        pass

    def tuple(self) -> tuple:
        """Returns a tuple representation of the scan data."""
        pass

    def update(self, **kwargs):
        """Updates scan data with provided keyword arguments."""
        pass
```
