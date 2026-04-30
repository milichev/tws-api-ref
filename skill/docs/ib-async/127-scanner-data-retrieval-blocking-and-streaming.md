### Scanner data retrieval (blocking and streaming)

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Shows how to perform both blocking requests for scanner data and event-driven streaming updates using ScannerSubscription objects.

```python
# Blocking
allParams = ib.reqScannerParameters()
print(allParams)

sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerData(sub)
print(scanData)

# Streaming
def onScanData(scanData):
    print(scanData[0])
    print(len(scanData))

sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerSubscription(sub)
scanData.updateEvent += onScanData
ib.sleep(60)
ib.cancelScannerSubscription(scanData)
```
