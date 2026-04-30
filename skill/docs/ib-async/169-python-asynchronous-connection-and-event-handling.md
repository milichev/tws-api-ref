### Python: Asynchronous Connection and Event Handling

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Manages asynchronous connection to the IB gateway, sets up event handlers for timeouts, errors, and disconnections, and probes the application for activity. It includes logic for retrying connections after delays and gracefully handling various exceptions.

```python
import asyncio
from ib_insync import *
from contextlib import suppress

class IBC:
    def __init__(self, clientId, gateway=False, tradingMode="paper"):
        self._logger = logging.getLogger(__name__)
        self.stoppingEvent = Event()
        self.startedEvent = Event()
        self.stoppedEvent = Event()
        self.softTimeoutEvent = Event()
        self.hardTimeoutEvent = Event()
        self.ib = IB()
        self.controller = IBController(self.ib)
        self.host = "127.0.0.1"
        self.port = 7497 if not gateway else 4002
        self.clientId = clientId
        self.connectTimeout = 10
        self.readonly = False
        self.account = ""
        self.raiseSyncErrors = False
        self.appStartupTime = 5
        self.appTimeout = 30
        self.probeTimeout = 5
        self.retryDelay = 5
        self._runner = None
        self.probeContract = Contract()
        self.probeContract.symbol = "EUR"
        self.probeContract.secType = "STK"
        self.probeContract.exchange = "SMART"

    def stop(self):
        self._logger.info("Stopping")
        self.stoppingEvent.emit(self)
        self.ib.disconnect()
        self._runner = None

    async def runAsync(self):
        def onTimeout(idlePeriod):
            if not waiter.done():
                waiter.set_result(None)

        def onError(reqId, errorCode, errorString, contract):
            if errorCode in {100, 1100} and not waiter.done():
                waiter.set_exception(Warning(f"Error {errorCode}"))

        def onDisconnected():
            if not waiter.done():
                waiter.set_exception(Warning("Disconnected"))

        while self._runner:
            try:
                await self.controller.startAsync()
                await asyncio.sleep(self.appStartupTime)
                await self.ib.connectAsync(
                    self.host,
                    self.port,
                    self.clientId,
                    self.connectTimeout,
                    self.readonly,
                    self.account,
                    self.raiseSyncErrors,
                )
                self.startedEvent.emit(self)
                self.ib.setTimeout(self.appTimeout)
                self.ib.timeoutEvent += onTimeout
                self.ib.errorEvent += onError
                self.ib.disconnectedEvent += onDisconnected

                while self._runner:
                    waiter: asyncio.Future = asyncio.Future()
                    await waiter
                    self._logger.debug("Soft timeout")
                    self.softTimeoutEvent.emit(self)
                    probe = self.ib.reqHistoricalDataAsync(
                        self.probeContract, "", "30 S", "5 secs", "MIDPOINT", False
                    )
                    bars = None
                    with suppress(asyncio.TimeoutError):
                        bars = await asyncio.wait_for(probe, self.probeTimeout)
                    if not bars:
                        self.hardTimeoutEvent.emit(self)
                        raise Warning("Hard timeout")
                    self.ib.setTimeout(self.appTimeout)

            except ConnectionRefusedError:
                pass
            except Warning as w:
                self._logger.warning(w)
            except Exception as e:
                self._logger.exception(e)
            finally:
                self.ib.timeoutEvent -= onTimeout
                self.ib.errorEvent -= onError
                self.ib.disconnectedEvent -= onDisconnected
                await self.controller.terminateAsync()
                self.stoppedEvent.emit(self)
                if self._runner:
                    await asyncio.sleep(self.retryDelay)


class Watchdog:
    def __init__(self, ibc, ib, appStartupTime=15):
        self.ibc = ibc
        self.ib = ib
        self.appStartupTime = appStartupTime

    def start(self):
        self.ibc._runner = True
        asyncio.ensure_future(self.ibc.runAsync())


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    ibc = IBC(1012, gateway=True, tradingMode="paper")
    ib = IB()
    app = Watchdog(ibc, ib, appStartupTime=15)
    app.start()
    IB.run()

```
