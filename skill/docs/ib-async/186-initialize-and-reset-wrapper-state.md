### Initialize and Reset Wrapper State

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Defines the data structures used to track IB API entities and provides a reset method to clear all internal caches and dictionaries to their default states.

```python
def reset(self):
	self.accountValues = {}
	self.acctSummary = {}
	self.portfolio = defaultdict(dict)
	self.positions = defaultdict(dict)
	self.trades = {}
	self.permId2Trade = {}
	self.fills = {}
	self.newsTicks = []
	self.msgId2NewsBulletin = {}
	self.tickers = {}
	self.pendingTickers = set()
	self.reqId2Ticker = {}
	self.ticker2ReqId = defaultdict(dict)
	self.reqId2Subscriber = {}
	self.reqId2PnL = {}
	self.reqId2PnlSingle = {}
	self.pnlKey2ReqId = {}
	self.pnlSingleKey2ReqId = {}
	self.lastTime = datetime.min
	self.time = -1
	self.accounts = []
	self.clientId = -1
	self.wshMetaReqId = 0
	self.wshEventReqId = 0
	self._reqId2Contract = {}
	self._timeout = 0
	self._futures = {}
	self._results = {}
	self.setTimeout(0)
```
