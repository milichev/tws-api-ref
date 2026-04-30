### Access Interactive Brokers FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The FlexReport class allows downloading, loading, and parsing account statement reports from the IB Flex Web Service.

```python
from ib_async.flexreport import FlexReport

# Initialize and download report
fr = FlexReport(token='YOUR_TOKEN', queryId='YOUR_QUERY_ID')
fr.download(token='YOUR_TOKEN', queryId='YOUR_QUERY_ID')

# Extract data as list or DataFrame
trades = fr.extract('TradeConfirm')
df = fr.df('TradeConfirm')
```
