*   [TWS API](../index.md)
*   [TWS API Reference](index.md)
*   [27 OrderState Class Reference](27-orderstate-ref.md)

## OrderState Class Reference

Provides an active order’s current state.

| Name | Type | Description |
| --- | --- | --- |
| Status | string | The order’s current status. |
| InitMarginBefore | string | The account’s current initial margin. |
| MaintMarginBefore | string | The account’s current maintenance margin. |
| EquityWithLoanBefore | string | The account’s current equity with loan. |
| InitMarginChange | string | The change of the account’s initial margin. |
| MaintMarginChange | string | The change of the account’s maintenance margin. |
| EquityWithLoanChange | string | The change of the account’s equity with loan. |
| InitMarginAfter | string | The order’s impact on the account’s initial margin. |
| MaintMarginAfter | string | The order’s impact on the account’s maintenance margin. |
| EquityWithLoanAfter | string | Shows the impact the order would have on the account’s equity with loan. |
| InitMarginBeforeOutsideRTH | float | The account’s expected initial margin outside of regular trading hours. |
| MaintMarginBeforeOutsideRTH | float | The account’s expected maintenance margin outside of regular trading hours. |
| EquityWithLoanBeforeOutsideRTH | float | The account’s expected equity with loan outside of regular trading hours. |
| InitMarginChangeOutsideRTH | float | The expected change of the account’s initial margin outside of regular trading hours. |
| MaintMarginChangeOutsideRTH | float | The expected change of the account’s maintenance margin outside of regular trading hours. |
| EquityWithLoanChangeOutsideRTH | float | The expected change of the account’s equity with loan outside of regular trading hours. |
| InitMarginAfterOutsideRTH | float | The order’s expected impact on the account’s initial margin outside of regular trading hours. |
| MaintMarginAfterOutsideRTH | float | The order’s expected impact on the account’s maintenance margin outside of regular trading hours. |
| EquityWithLoanAfterOutsideRTH | float | Shows the expected impact the order would have on the account’s equity with loan outside of regular trading hours. |
| Commission | double | The order’s generated commission. |
| MinCommission | double | The execution’s minimum commission. |
| MaxCommission | double | The executions maximum commission. |
| CommissionCurrency | string | The generated commission currency. |
| WarningText | string | If the order is warranted, a descriptive message will be provided. |
| CompletedTime | string |  |
| CompletedStatus | string |  |