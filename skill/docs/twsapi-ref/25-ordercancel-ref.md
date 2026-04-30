[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [25 OrderCancel Class Reference](25-ordercancel-ref.md)


## OrderCancel Class Reference

The Order cancellation parameters when cancelling an order.

| Name | Type | Description |
| --- | --- | --- |
| extOperator | string | Following CME Rule 576, the ExtOperator field will signify the unique API operator at the time of trading for order management. |
| manualOrderIndicator | int | Following CME Rule 576, the ManualOrderIndicator field will signify if an order is manual (1) or automated (0). |
| manualOrderCancelTime | string | Used by brokers and advisors when manually entering an order cancellation request. Format should be “YYYYMMDD-HH:mm:ss” using UTC as the timezone value. |
