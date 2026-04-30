  [index.html](IBKR TWS API) -> 
  [20-hist-tick-last.md](20 HistoricalTickLast Class Reference) -> 

 20 HistoricalTickLast Class Reference


## HistoricalTickLast Class Reference

Used when requesting historical tick data with whatToShow = TRADES.

| Name | Type | Description |
| --- | --- | --- |
| Time | long | The UNIX timestamp of the historical tick. |
| TickAttribLast | TickAttribLast | Tick attribs of historical last tick. |
| Price | double | The last price of the historical tick. |
| Size | decimal | The last size of the historical tick. |
| Exchange | string | The source exchange of the historical tick. |
| SpecialConditions | string | The conditions of the historical tick. Refer to [Trade Conditions](https://www.interactivebrokers.com/en/index.php?f=7235) page for more details. |
