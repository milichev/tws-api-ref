### Request Fundamental Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves fundamental data for a contract in XML format. This is a blocking method. It requires the contract, report type, and optional fundamental data options.

```python
def reqFundamentalData(
        self,
        contract: Contract,
        reportType: str,
        fundamentalDataOptions: list[TagValue] = [],
    ) -> str:
        """
        Get fundamental data of a contract in XML format.

        This method is blocking.

        https://interactivebrokers.github.io/tws-api/fundamentals.html

        Args:
            contract: Contract to query.
            reportType:

                * 'ReportsFinSummary': Financial summary
                * 'ReportsOwnership': Company's ownership
                * 'ReportSnapshot': Company's financial overview
                * 'ReportsFinStatements': Financial Statements
                * 'RESC': Analyst Estimates
                * 'CalendarReport': Company's calendar
            fundamentalDataOptions: Unknown
        """
        return self._run(
            self.reqFundamentalDataAsync(contract, reportType, fundamentalDataOptions)
        )
```
