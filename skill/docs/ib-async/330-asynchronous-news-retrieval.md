### Asynchronous News Retrieval

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Functions to fetch news providers, specific articles, and historical news data asynchronously. Historical news includes date formatting and timeout handling.

```python
def reqNewsProvidersAsync(self) -> Awaitable[list[NewsProvider]]:
	future = self.wrapper.startReq("newsProviders")
	self.client.reqNewsProviders()
	return future

def reqNewsArticleAsync(self, providerCode: str, articleId: str, newsArticleOptions: list[TagValue] = []) -> Awaitable[NewsArticle]:
	reqId = self.client.getReqId()
	future = self.wrapper.startReq(reqId)
	self.client.reqNewsArticle(reqId, providerCode, articleId, newsArticleOptions)
	return future
```
