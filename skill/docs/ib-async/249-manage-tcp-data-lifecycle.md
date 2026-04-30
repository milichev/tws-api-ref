### Manage TCP Data Lifecycle

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Manages the lifecycle of TCP data arrival and processing, resetting pending ticker states and emitting update events to the IB client.

```python
def tcpDataArrived(self):
    self.lastTime = datetime.now(self.defaultTimezone)
    self.time = time.time()
    for ticker in self.pendingTickers:
        ticker.ticks = []
        ticker.tickByTicks = []
        ticker.domTicks = []
    self.pendingTickers = set()

def tcpDataProcessed(self):
    self.ib.updateEvent.emit()
    if self.pendingTickers:
        for ticker in self.pendingTickers:
            ticker.time = self.lastTime
            ticker.timestamp = self.time
            ticker.updateEvent.emit(ticker)
        self.ib.pendingTickersEvent.emit(self.pendingTickers)
```
