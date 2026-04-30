### Send IB API Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

These methods encapsulate the communication logic for the Interactive Brokers API. They utilize a central 'send' function to transmit specific request codes and parameters to the server.

```python
def cancelHistoricalData(self, reqId):
    self.send(25, 1, reqId)

def reqCurrentTime(self):
    self.send(49, 1)

def reqRealTimeBars(self, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions):
    self.send(50, 3, reqId, contract, barSize, whatToShow, useRTH, realTimeBarsOptions)

def reqFundamentalData(self, reqId, contract, reportType, fundamentalDataOptions):
    options = fundamentalDataOptions or []
    self.send(52, 2, reqId, contract.conId, contract.symbol, contract.secType, contract.exchange, contract.primaryExchange, contract.currency, contract.localSymbol, reportType, len(options), options)

def startApi(self):
    self.send(71, 2, self.clientId, self.optCapab)
```
