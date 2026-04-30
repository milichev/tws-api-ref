### Handle Commission Reports (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes commission reports, updating fill objects with commission details and PnL. Emits commission report events for trades. Handles cases where the fill might not be found or the order was filled before connection.

```python
def commissionReport(self, commissionReport: CommissionReport):
        if commissionReport.yield_ == UNSET_DOUBLE:
            commissionReport.yield_ = 0.0

        if commissionReport.realizedPNL == UNSET_DOUBLE:
            commissionReport.realizedPNL = 0.0

        fill = self.fills.get(commissionReport.execId)
        if fill:
            report = dataclassUpdate(fill.commissionReport, commissionReport)
            self._logger.info(f"commissionReport: {report}")
            trade = self.permId2Trade.get(fill.execution.permId)
            if trade:
                self.ib.commissionReportEvent.emit(trade, fill, report)
                trade.commissionReportEvent.emit(trade, fill, report)
            else:
                # this is not a live execution and the order was filled
                # before this connection started
                pass
        else:
            # commission report is not for this client
            pass
```
