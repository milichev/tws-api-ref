### Request Snapshot Tickers - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests and returns a list of snapshot tickers for specified contracts. This method is blocking and returns only when all tickers are ready. It can optionally request NBBO snapshots which may incur a fee.

```python
ib.reqTickers(*contracts, regulatorySnapshot=False)
```
