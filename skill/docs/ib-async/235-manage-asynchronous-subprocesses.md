### Manage Asynchronous Subprocesses

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Methods for executing, monitoring, and terminating external processes asynchronously. It handles platform-specific termination logic for Windows and Unix-like systems.

```python
async def terminateAsync(self):
    if not self._proc:
        return
    self._logger.info("Terminating")
    if self._monitor:
        self._monitor.cancel()
        self._monitor = None
    if self._isWindows:
        import subprocess
        subprocess.call(["taskkill", "/F", "/T", "/PID", str(self._proc.pid)])
    else:
        with suppress(ProcessLookupError):
            self._proc.terminate()
            await self._proc.wait()
    self._proc = None

async def monitorAsync(self):
    while self._proc:
        line = await self._proc.stdout.readline()
        if not line:
            break
        self._logger.log(IBC.IbcLogLevel, line.strip().decode())
```
