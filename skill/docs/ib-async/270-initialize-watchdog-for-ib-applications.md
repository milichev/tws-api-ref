### Initialize Watchdog for IB Applications

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

The Watchdog class monitors the health of an IB connection by tracking idle network traffic and performing historical data probes. It automatically restarts the application if it becomes unresponsive.

```python
def onConnected():
    print(ib.accountValues())

ibc = IBC(974, gateway=True, tradingMode='paper')
ib = IB()
ib.connectedEvent += onConnected
watchdog = Watchdog(ibc, ib, port=4002)
watchdog.start()
ib.run()
```
