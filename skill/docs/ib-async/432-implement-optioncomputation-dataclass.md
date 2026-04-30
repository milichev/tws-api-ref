### Implement OptionComputation Dataclass

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

A dataclass representing option Greeks and pricing metrics. It includes operator overloading for addition, subtraction, and multiplication to facilitate arithmetic operations on option data.

```python
@dataclass(slots=True, frozen=True)
class OptionComputation:
    tickAttrib: int
    impliedVol: float | None = None
    delta: float | None = None
    optPrice: float | None = None
    pvDividend: float | None = None
    gamma: float | None = None
    vega: float | None = None
    theta: float | None = None
    undPrice: float | None = None

    def __add__(self, other: OptionComputation) -> OptionComputation:
        if not isinstance(other, self.__class__):
            raise TypeError(f"Cannot add {type(self)} and {type(other)}")
        return self.__class__(tickAttrib=0, impliedVol=(self.impliedVol or 0) + (other.impliedVol or 0), delta=(self.delta or 0) + (other.delta or 0), optPrice=(self.optPrice or 0) + (other.optPrice or 0), gamma=(self.gamma or 0) + (other.gamma or 0), vega=(self.vega or 0) + (other.vega or 0), theta=(self.theta or 0) + (other.theta or 0), undPrice=self.undPrice)
```
