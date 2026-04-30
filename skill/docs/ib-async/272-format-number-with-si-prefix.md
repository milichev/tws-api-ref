### Format Number with SI Prefix

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Formats a number (integer or float) to three significant digits, appending an appropriate SI prefix (yotta, zetta, ..., kilo, mega, ...). Handles negative numbers and very small values.

```python
import math

def formatSI(n: float) -> str:
    """Format the integer or float n to 3 significant digits + SI prefix."""
    s = ""
    if n < 0:
        n = -n
        s += "-"

    if isinstance(n, int) and n < 1000:
        s = str(n) + " "
    elif n < 1e-22:
        s = "0.00 "
    else:
        assert n < 9.99e26
        log = int(math.floor(math.log10(n)))
        i, j = divmod(log, 3)
        for _try in range(2):
            templ = f"%.{2 - j}f"
            val = templ % (n * 10 ** (-3 * i))
            if val != "1000":
                break
            i += 1
            j = 0
        s += val + " "
        if i != 0:
            s += "yzafpnum kMGTPEZY"[i + 8]

    return s
```
