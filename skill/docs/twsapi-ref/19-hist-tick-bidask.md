[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [19 HistoricalTickBidAsk Class Reference](19-hist-tick-bidask.md)


## HistoricalTickBidAsk Class Reference

Used when requesting historical tick data with whatToShow = BID\_ASK.

| Name | Type | Description |
| --- | --- | --- |
| Time | long | The UNIX timestamp of the historical tick. |
| TickAttribLast | TickAttribLast | Tick attribs of historical last tick. |
| Price | double | The last price of the historical tick. |
| Size | decimal | The last size of the historical tick. |
| Exchange | string | The source exchange of the historical tick. |
| SpecialConditions | string | The conditions of the historical tick. Refer to Trade Conditions page for more details |
