### Extract Trades from Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

This snippet demonstrates how to extract trade records from a report object using the extract method. It returns a collection of trade data which is then printed to the console.

```python
trades = report.extract("Trade")
print(trades)
```
