### Manage PnL Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Methods to initiate and cancel live PnL and PnL-Single event subscriptions. These functions track subscription state using unique keys and return live-updating objects.

```python
def reqPnL(self, account: str, modelCode: str = "") -> PnL:
	key = (account, modelCode)
	assert key not in self.wrapper.pnlKey2ReqId
	reqId = self.client.getReqId()
	self.wrapper.pnlKey2ReqId[key] = reqId
	pnl = PnL(account, modelCode)
	self.wrapper.reqId2PnL[reqId] = pnl
	self.client.reqPnL(reqId, account, modelCode)
	return pnl

def cancelPnL(self, account, modelCode: str = ""):
	key = (account, modelCode)
	reqId = self.wrapper.pnlKey2ReqId.pop(key, None)
	if reqId:
		self.client.cancelPnL(reqId)
		self.wrapper.reqId2PnL.pop(reqId, None)
	else:
		self._logger.error(f"cancelPnL: No subscription for account {account}, modelCode {modelCode}")
```
