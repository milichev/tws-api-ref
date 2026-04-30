### Asynchronous WSH Data Retrieval

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to fetch Wall Street Horizon (WSH) metadata and event data. These methods manage request cancellation to prevent overlapping subscriptions.

```python
async def getWshMetaDataAsync(self) -> str:
	if self.wrapper.wshMetaReqId:
		self.cancelWshMetaData()
	self.reqWshMetaData()
	future = self.wrapper.startReq(self.wrapper.wshMetaReqId, container="")
	await future
	return future.result()
```
