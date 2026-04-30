### Create Pandas DataFrame from Objects (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Generates a pandas DataFrame from a sequence of objects. It supports dataclasses, DynamicObjects, tuples, and other record-like objects. Optionally filters columns based on provided labels. Requires the pandas library.

```python
import asyncio
import datetime as dt
import logging
import math
import signal
import sys
import time
from collections.abc import AsyncIterator, Awaitable, Callable, Iterator
from dataclasses import fields, is_dataclass
from typing import (
    Any,
    Final,
    TypeAlias,
)
from zoneinfo import ZoneInfo

import eventkit as ev

globalErrorEvent = ev.Event()

EPOCH: Final = dt.datetime(1970, 1, 1, tzinfo=dt.timezone.utc)
UNSET_INTEGER: Final = 2**31 - 1
UNSET_DOUBLE: Final = sys.float_info.max

Time_t: TypeAlias = dt.time | dt.datetime


def df(objs, labels: list[str] | None = None):
    """
    Create pandas DataFrame from the sequence of same-type objects.

    Args:
      labels: If supplied, retain only the given labels and drop the rest.
    """
    import pandas as pd

    from .objects import DynamicObject

    if objs:
        objs = list(objs)
        obj = objs[0]
        if is_dataclass(obj):
            df = pd.DataFrame.from_records(dataclassAsTuple(o) for o in objs)
            df.columns = [field.name for field in fields(obj)]
        elif isinstance(obj, DynamicObject):
            df = pd.DataFrame.from_records(o.__dict__ for o in objs)
        else:
            df = pd.DataFrame.from_records(objs)

        if isinstance(obj, tuple):
            _fields = getattr(obj, "_fields", None)
            if _fields:
                # assume it's a namedtuple
                df.columns = _fields
    else:
        df = None

    if labels:
        exclude = [label for label in df if label not in labels]
        df = df.drop(exclude, axis=1)

    return df

```
