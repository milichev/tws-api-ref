### Process Scanner Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Receives and processes data from a scanner request. It creates ScanData objects and appends them to a list associated with the request ID, clearing the list if it's the first result (rank 0).

```python
def scannerData(
            self,
            reqId: int,
            rank: int,
            contractDetails: ContractDetails,
            distance: str,
            benchmark: str,
            projection: str,
            legsStr: str,
    ):
        data = ScanData(rank, contractDetails, distance, benchmark, projection, legsStr)
        dataList = self.reqId2Subscriber.get(reqId)
        if dataList is None:
            dataList = self._results.get(reqId)

        if dataList is not None:
            if rank == 0:
                dataList.clear()
            dataList.append(data)
```
