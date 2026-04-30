### Get News Bulletins (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of Interactive Brokers news bulletins. These are official announcements and updates from IB.

```python
def newsBulletins(self) -> list[NewsBulletin]:
    """List of IB news bulletins."""
    return list(self.wrapper.msgId2NewsBulletin.values())
```
