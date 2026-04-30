### Access news and corporate events with Python

Source: https://ib-api-reloaded.github.io/ib_async/_sources/recipes.rst.txt

Retrieves news articles, bulletins, and Wall Street Horizon corporate event data for specific instruments.

```python
# News articles
newsProviders = ib.reqNewsProviders()
codes = '+'.join(np.code for np in newsProviders)
amd = Stock('AMD', 'SMART', 'USD')
ib.qualifyContracts(amd)
headlines = ib.reqHistoricalNews(amd.conId, codes, '', '', 10)
article = ib.reqNewsArticle(headlines[0].providerCode, headlines[0].articleId)

# WSH Event Calendar
data = WshEventData(filter = '{"country": "All", "watchlist": ["8314"], "wshe_ed": "true"}')
events = ib.getWshEventData(data)
```
