### Manage market scanner data with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Shows both blocking and streaming approaches to retrieve market scanner data. The streaming example uses an event-driven pattern to handle updates.

```python
# Blocking
allParams = ib.reqScannerParameters()
sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerData(sub)
print(scanData)

# Streaming
def onScanData(scanData):
    print(scanData[0])

sub = ScannerSubscription(
    instrument='FUT.US',
    locationCode='FUT.GLOBEX',
    scanCode='TOP_PERC_GAIN')
scanData = ib.reqScannerSubscription(sub)
scanData.updateEvent += onScanData
ib.sleep(60)
ib.cancelScannerSubscription(scanData)
```
