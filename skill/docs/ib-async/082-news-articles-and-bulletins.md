### News articles and bulletins

Source: https://ib-api-reloaded.github.io/ib_async/recipes.html

Demonstrates how to fetch historical news headlines for a contract and retrieve detailed article content, as well as how to monitor general news bulletins.

```python
newsProviders = ib.reqNewsProviders()
print(newsProviders)
codes = '+'.join(np.code for np in newsProviders)

amd = Stock('AMD', 'SMART', 'USD')
ib.qualifyContracts(amd)
headlines = ib.reqHistoricalNews(amd.conId, codes, '', '', 10)
latest = headlines[0]
print(latest)
article = ib.reqNewsArticle(latest.providerCode, latest.articleId)
print(article)

# Bulletins
ib.reqNewsBulletins(True)
ib.sleep(5)
print(ib.newsBulletins())
```
