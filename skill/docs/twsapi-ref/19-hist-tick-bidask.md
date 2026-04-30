  [index.html](IBKR TWS API) -> 
  [19-hist-tick-bidask.md](19 HistoricalTickBidAsk Class Reference) -> 

 19 HistoricalTickBidAsk Class Reference


## HistoricalTickBidAsk Class Reference

Used when requesting historical tick data with whatToShow = BID\_ASK.

| Name | Type | Description |
| --- | --- | --- |
| Time | long | The UNIX timestamp of the historical tick. |
| TickAttribLast | TickAttribLast | Tick attribs of historical last tick. |
| Price | double | The last price of the historical tick. |
| Size | decimal | The last size of the historical tick. |
| Exchange | string | The source exchange of the historical tick. |
| SpecialConditions | string | The conditions of the historical tick. Refer to [Trade Conditions](https://www.interactivebrokers.com/en/index.php?f=7235) page for more details |
