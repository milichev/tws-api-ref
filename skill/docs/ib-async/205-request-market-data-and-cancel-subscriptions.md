### Request Market Data and Cancel Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Methods to initiate market data requests for specific contracts and cancel existing subscriptions. It supports complex contract types like 'BAG' (combos) and delta-neutral configurations.

```python
def reqMktData(self, reqId, contract, genericTickList, snapshot, regulatorySnapshot, mktDataOptions):
    fields = [1, 11, reqId, contract]

    if contract.secType == "BAG":
        legs = contract.comboLegs or []
        fields += [len(legs)]
        for leg in legs:
            fields += [leg.conId, leg.ratio, leg.action, leg.exchange]

    dnc = contract.deltaNeutralContract
    if dnc:
        fields += [True, dnc.conId, dnc.delta, dnc.price]
    else:
        fields += [False]

    fields += [genericTickList, snapshot, regulatorySnapshot, mktDataOptions]
    self.send(*fields)

def cancelMktData(self, reqId):
    self.send(2, 2, reqId)
```
