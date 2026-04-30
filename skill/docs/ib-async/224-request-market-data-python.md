### Request Market Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to real-time streaming tick data for a given contract. It returns a Ticker object that will hold the incoming data. Requires a Contract object and optional parameters for snapshotting and regulatory data.

```python
def reqMktData(
    self,
    contract: Contract,
    genericTickList: str,
    snapshot: bool,
    regulatorySnapshot: bool,
    mktDataOptions: dict,
) -> Ticker:
    """
    Request real-time streaming tick data.

    Args:
        contract: Contract of interest.
        genericTickList: Comma-separated list of generic tick field IDs.
        snapshot: If True then request a one-time snapshot, otherwise
            subscribe to a stream of realtime tick data.
        regulatorySnapshot: Request NBBO snapshot (may incur a fee).
        mktDataOptions: Unknown
    """
    reqId = self.client.getReqId()
    ticker = self.wrapper.startTicker(reqId, contract, "mktData")
    self.client.reqMktData(
        reqId,
        contract,
        genericTickList,
        snapshot,
        regulatorySnapshot,
        mktDataOptions,
    )
    return ticker
```
