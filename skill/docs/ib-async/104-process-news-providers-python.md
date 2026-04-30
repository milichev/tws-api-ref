### Process News Providers (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles a list of news providers. It creates new NewsProvider objects with code and name attributes and ends the request with the processed list.

```python
def newsProviders(self, newsProviders: list[NewsProvider]):
        newsProviders = [NewsProvider(code=p.code, name=p.name) for p in newsProviders]
        self._endReq("newsProviders", newsProviders)
```
