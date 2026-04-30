[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [03 Bar Class Reference](03-bar-ref.md)


## Bar Class Reference

The historical data bar’s description.

| Name | Type | Description |
| --- | --- | --- |
| Time | string | The bar’s date and time (either as a yyyymmss hh:mm:ss formatted string or as system time according to the request). Time zone is the TWS time zone chosen on login. |
| Open | double | The bar’s open price. |
| High | double | The bar’s high price. |
| Low | double | The bar’s low price. |
| Close | double | The bar’s close price. |
| Volume | decimal | The bar’s traded volume if available (only available for TRADES) |
| Count | int | The number of trades during the bar’s timespan (only available for TRADES) |
| WAP | decimal | The bar’s Weighted Average Price (only available for TRADES) |
