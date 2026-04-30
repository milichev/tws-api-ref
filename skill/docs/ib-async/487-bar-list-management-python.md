### Bar List Management (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Represents a list of Bar objects, inheriting from Python's built-in list. It includes an updateEvent for signaling changes and overrides the equality operator for identity comparison. This class manages collections of aggregated bars.

```python
class BarList(list[Bar]):
    def __init__(self, *args):
        super().__init__(*args)
        self.updateEvent = Event("updateEvent")

    def __eq__(self, other) -> bool:
        return self is other
```
