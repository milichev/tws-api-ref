### Create Candlestick Plot with Matplotlib

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Generates a candlestick plot from provided bar data. Accepts data as a pandas DataFrame or a list of bar objects. Outputs a matplotlib figure. Dependencies include matplotlib and pandas.

```python
import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.lines import Line2D
from matplotlib.patches import Rectangle

def create_candlestick_plot(bars, title, upColor, downColor):
    """Create candlestick plot for the given bars. The bars can be given as
    a DataFrame or as a list of bar objects.
    """
    if isinstance(bars, pd.DataFrame):
        ohlcTups = [tuple(v) for v in bars["open", "high", "low", "close"]].values
    elif bars and hasattr(bars[0], "open_"):
        ohlcTups = [(b.open_, b.high, b.low, b.close) for b in bars]
    else:
        ohlcTups = [(b.open, b.high, b.low, b.close) for b in bars]

    fig, ax = plt.subplots()
    ax.set_title(title)
    ax.grid(True)
    fig.set_size_inches(10, 6)
    for n, (open_, high, low, close) in enumerate(ohlcTups):
        if close >= open_:
            color = upColor
            bodyHi, bodyLo = close, open_
        else:
            color = downColor
            bodyHi, bodyLo = open_, close
        line = Line2D(xdata=(n, n), ydata=(low, bodyLo), color=color, linewidth=1)
        ax.add_line(line)
        line = Line2D(xdata=(n, n), ydata=(high, bodyHi), color=color, linewidth=1)
        ax.add_line(line)
        rect = Rectangle(
            xy=(n - 0.3, bodyLo),
            width=0.6,
            height=bodyHi - bodyLo,
            edgecolor=color,
            facecolor=color,
            alpha=0.4,
            antialiased=True,
        )
        ax.add_patch(rect)

    ax.autoscale_view()
    return fig
```
