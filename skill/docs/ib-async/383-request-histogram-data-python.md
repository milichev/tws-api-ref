### Request Histogram Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests histogram data for a given contract. This is a blocking method. It requires the contract, a boolean indicating regular trading hours, and the desired period.

```python
def reqHistogramData(
        self, contract: Contract, useRTH: bool, period: str
    ) -> list[HistogramData]:
        """
        Request histogram data.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/histograms.html

        Args:
            contract: Contract to query.
            useRTH: If True then only show data from within Regular
                Trading Hours, if False then show all data.
            period: Period of which data is being requested, for example
                '3 days'.
        """
        return self._run(self.reqHistogramDataAsync(contract, useRTH, period))
```
