[IBKR TWS API](../../SKILL.md) · [ib_async Reference](index.md) · [Utilities &amp; Reports](07-util.md)


# Utilities & Reports

### Basic ib_async Setup and Report Usage

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Demonstrates basic setup for logging and using the FlexReport class to download and print available topics from a report.

```python
if __name__ == "__main__":
    util.logToConsole()
    report = FlexReport("945692423458902392892687", "272555")
    print(report.topics())
```

---

### Start Asyncio Event Loop for Jupyter

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Initializes and starts the asyncio event loop, specifically designed for use within Jupyter notebooks. It ensures proper patching for asynchronous operations in this environment.

```python
def startLoop():
    """Use nested asyncio event loop for Jupyter notebooks."""
    patchAsyncio()
```

---

### Get FlexReport Topics

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves the set of available topics that can be extracted from a FlexReport.

```python
topics()
```

---

### Logging Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for setting up logging.

```APIDOC
## ib_async.util.logToFile

### Description
Create a log handler that logs to the given file.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **path** (str) - Required - The path to the log file.
- **level** (int) - Optional - The logging level, defaults to 20 (INFO).
```

```APIDOC
## ib_async.util.logToConsole

### Description
Create a log handler that logs to the console.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **level** (int) - Optional - The logging level, defaults to 20 (INFO).
```

---

### Initialize FlexReport with Token and Query ID

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Instantiate FlexReport to download a report using a provided token and query ID. Ensure the token and queryId are valid for the Interactive Brokers account.

```python
report = FlexReport("945692423458902392892687", "272555")
```

---

### Integrate Qt Event Loop with Asyncio

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Combines Qt's event loop with asyncio for seamless integration. Supports multiple Qt bindings (PyQt5, PyQt6, PySide2, PySide6) and allows configuration of the polling period. Requires importing Qt modules and setting up a QApplication instance.

```python
def useQt(qtLib: str = "PyQt5", period: float = 0.01):
    """
    Run combined Qt5/asyncio event loop.

    Args:
        qtLib: Name of Qt library to use:

          * PyQt5
          * PyQt6
          * PySide2
          * PySide6
        period: Period in seconds to poll Qt.
    """

    def qt_step():
        loop.call_later(period, qt_step)
        if not stack:
            qloop = qc.QEventLoop()
            timer = qc.QTimer()
            timer.timeout.connect(qloop.quit)
            stack.append((qloop, timer))
        qloop, timer = stack.pop()
        timer.start(0)
        qloop.exec() if qtLib == "PyQt6" else qloop.exec_()
        timer.stop()
        stack.append((qloop, timer))
        qApp.processEvents()  # type: ignore

    if qtLib not in {"PyQt5", "PyQt6", "PySide2", "PySide6"}:
        raise RuntimeError(f"Unknown Qt library: {qtLib}")
    from importlib import import_module

    qc = import_module(qtLib + ".QtCore")
    qw = import_module(qtLib + ".QtWidgets")
    global qApp
    qApp = (
        qw.QApplication.instance() or qw.QApplication(sys.argv)  # type: ignore
    )  # type: ignore
    loop = getLoop()
    stack: list = []
    qt_step()
```

---

### Initialize FlexReport from File Path

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Load an existing Flex report from a specified XML file path. This is useful for processing previously downloaded statements.

```python
report = FlexReport(path="path/to/your/report.xml")
```

---

### Downloading a Flex Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Demonstrates how to download a Flex Report using a token and query ID.

```APIDOC
## POST /AccountManagement/FlexWebService/SendRequest

### Description
Initiates the download of a Flex Report from Interactive Brokers using provided credentials.

### Method
POST (Implicitly via `urlopen` in the `download` method)

### Endpoint
`https://ndcdyn.interactivebrokers.com/AccountManagement/FlexWebService/SendRequest?t={token}&q={queryId}&v=3`

### Parameters
#### Query Parameters
- **t** (string) - Required - The authentication token for the Flex Web Service.
- **q** (string) - Required - The query ID for the specific report requested.
- **v** (string) - Required - The API version, typically '3'.

### Request Example
```python
from ib_async import FlexReport

token = "YOUR_TOKEN"
queryId = "YOUR_QUERY_ID"

try:
    report = FlexReport(token=token, queryId=queryId)
    print("Report downloaded successfully.")
except Exception as e:
    print(f"Error downloading report: {e}")
```

### Response
#### Success Response (200)
Upon successful initiation, the service prepares the report. The `download` method then polls for the report's availability.

#### Response Example (Status Check)
```xml
<Status>Success</Status>
<ReferenceCode>...</ReferenceCode>
<Url>...</Url>
```

#### Error Response
- **ErrorCode** (string) - The error code.
- **ErrorMessage** (string) - A description of the error.

#### Error Response Example
```xml
<Status>Error</Status>
<ErrorCode>1234</ErrorCode>
<ErrorMessage>Invalid token or query ID</ErrorMessage>
```
```

---

### Get Flex Report URL

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Retrieve the base URL for the Flex Web Service. It defaults to a predefined URL but can be overridden by the IB_FLEXREPORT_URL environment variable.

```python
def is_valid_url(url: str) -> bool:
            try:
                result = urlparse(url)
                # Must have scheme (http/https) and netloc (domain)
                return all([result.scheme, result.netloc])
            except Exception:
                return False

        _url = os.getenv("IB_FLEXREPORT_URL", FLEXREPORT_URL)
        if is_valid_url(_url):
            return _url
        raise FlexError(
            "Invalid URL, please check that env variable IB_FLEXREPORT_URL is set correctly."
        )
```

---

### Get Available Topics from Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Retrieve a set of all available topics (data categories) within the loaded Flex report. This helps in identifying what data can be extracted.

```python
print(report.topics())
```

---

### Loading a Flex Report from File

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Shows how to load an existing Flex Report from a local XML file.

```APIDOC
## Load Flex Report from File

### Description
Loads a previously downloaded Flex Report from a local XML file.

### Method
N/A (Class method)

### Endpoint
N/A

### Parameters
#### Initialization Parameter
- **path** (string) - Required - The file path to the local XML report file.

### Request Example
```python
from ib_async import FlexReport

file_path = "/path/to/your/report.xml"

try:
    report = FlexReport(path=file_path)
    print(f"Report loaded from {file_path} successfully.")
except FileNotFoundError:
    print(f"Error: File not found at {file_path}")
except Exception as e:
    print(f"Error loading report: {e}")
```

### Response
N/A (Data is loaded into the `FlexReport` object's attributes.)
```

---

### timeRange

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

An iterator that yields datetime objects at specified time intervals between a start and end time. It waits until each time point is reached.

```APIDOC
## timeRange

### Description
Iterator that waits periodically until certain time points are reached while yielding those time points.

### Method
`timeRange`

### Parameters
#### Arguments
- **start** (Time_t) - Required - Start time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **end** (Time_t) - Required - End time, can be specified as datetime.datetime, or as datetime.time in which case today is used as the date.
- **step** (float) - Required - The number of seconds of each period.

### Response Example
```json
{
  "yielded_times": [
    "2023-10-27T10:00:00",
    "2023-10-27T10:05:00"
  ]
}
```
```

---

### Load FlexReport from File

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Loads a FlexReport from a specified XML file path.

```python
load(_path_)
```

---

### Log to File

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures a file handler for logging. If logger handlers exist, it sets the log level for 'ib_async'. Otherwise, it initializes the logger with the specified level and a file handler.

```python
import logging

def logToFile(path, level=logging.INFO):
    """Create a log handler that logs to the given file."""
    logger = logging.getLogger()
    if logger.handlers:
        logging.getLogger("ib_async").setLevel(level)
    else:
        logger.setLevel(level)

    formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
    handler = logging.FileHandler(path)
    handler.setFormatter(formatter)
    logger.addHandler(handler)
```

---

### Initialize FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes the FlexReport class to access account statement webservice. Obtain a token via the web portal settings. You can provide a token and queryId for direct download, or a path to load from an XML file. The default URL can be overridden by setting the IB_FLEXREPORT_URL environment variable.

```python
ib_async.flexreport.FlexReport(_token =None_, _queryId =None_, _path =None_)
```

---

### Download FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Downloads a FlexReport using a provided token and query ID.

```python
download(_token_ , _queryId_)
```

---

### Run Combined Qt5/Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Enables running a combined Qt5 and asyncio event loop, particularly useful for Jupyter notebooks. Specify the Qt library (e.g., 'PyQt5') and the polling period in seconds.

```python
ib_async.util.useQt(_qtLib ='PyQt5'_, _period =0.01_)
```

---

### Add FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/_sources/changelog.rst.txt

Introduces the `FlexReport` class for handling IB Flex reports.

```python
FlexReport
```

---

### Log to Console

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures a stream handler for console logging. If a stream handler already exists, it adjusts the log level for 'ib_async'. Otherwise, it creates a new handler and adds it to the logger.

```python
import logging
import sys

def logToConsole(level=logging.INFO):
    """Create a log handler that logs to the console."""
    logger = logging.getLogger()
    stdHandlers = [
        h
        for h in logger.handlers
        if type(h) is logging.StreamHandler and h.stream is sys.stderr
    ]

    if stdHandlers:
        # if a standard stream handler already exists, use it and
        # set the log level for the ib_async namespace only
        logging.getLogger("ib_async").setLevel(level)
    else:
        # else create a new handler
        logger.setLevel(level)
        formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
        handler = logging.StreamHandler()
        handler.setFormatter(formatter)
        logger.addHandler(handler)
```

---

### Download Flex Report

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Download a Flex report from Interactive Brokers using a provided token and query ID. The report is downloaded in XML format and parsed.

```python
resp = urlopen(url)
        data = resp.read()

        root = et.fromstring(data)
        elem = root.find("Status")
        if elem is not None and elem.text == "Success":
            elem = root.find("ReferenceCode")
            assert elem is not None
            code = elem.text
            elem = root.find("Url")
            assert elem is not None
            baseUrl = elem.text
            _logger.info("Statement is being prepared...")
        else:
            elem = root.find("ErrorCode")
            errorCode = elem.text if elem is not None else ""
            elem = root.find("ErrorMessage")
            errorMsg = elem.text if elem is not None else ""
            raise FlexError(f"{errorCode}: {errorMsg}")

        while True:
            time.sleep(1)
            url = f"{baseUrl}?q={code}&t={token}&v=3"
            resp = urlopen(url)
            self.data = resp.read()
            self.root = et.fromstring(self.data)
            if self.root[0].tag == "code":
                msg = self.root[0].text
                if msg and msg.startswith("Statement generation in progress"):
                    _logger.info("still working...")
                    continue
                else:
                    raise FlexError(msg)
            break
        _logger.info("Statement retrieved.")
```

---

### Object Conversion

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for converting objects into different structures.

```APIDOC
## ib_async.util.tree

### Description
Convert object to a tree of lists, dicts and simple values. The result can be serialized to JSON.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **tree** (Any) - A tree structure representing the object.
```

---

### Asyncio Patching and Loop Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for patching asyncio and managing the event loop.

```APIDOC
## ib_async.util.patchAsyncio

### Description
Patch asyncio to allow nested event loops.

### Method
N/A

### Endpoint
N/A
```

```APIDOC
## ib_async.util.getLoop

### Description
Get asyncio event loop with smart fallback handling.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **loop** (asyncio.AbstractEventLoop) - The asyncio event loop.
```

---

### logToConsole

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures logging to output messages to the console (stderr).

```APIDOC
## Log to Console

### Description
Sets up a stream handler for the logger to direct log messages to the standard error console. It allows setting the logging level and ensures only one handler is added if one already exists.

### Method
`logToConsole(level: int = logging.INFO)`

### Parameters
- **level** (int, optional) - The minimum logging level to display on the console. Defaults to `logging.INFO`.

### Example
```python
import logging
import sys

def logToConsole(level=logging.INFO):
    """Create a log handler that logs to the console."""
    logger = logging.getLogger()
    stdHandlers = [
        h
        for h in logger.handlers
        if type(h) is logging.StreamHandler and h.stream is sys.stderr
    ]

    if stdHandlers:
        logging.getLogger("ib_async").setLevel(level)
    else:
        logger.setLevel(level)
        formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
        handler = logging.StreamHandler()
        handler.setFormatter(formatter)
        logger.addHandler(handler)

# Configure logging to the console
logToConsole(level=logging.DEBUG)
logging.info("This message will appear on the console.")
```
```

---

### Event Handling

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for managing global error events.

```APIDOC
## ib_async.util.globalErrorEvent

### Description
Event to emit global exceptions.

### Method
N/A (Event)

### Endpoint
N/A
```

---

### Allow Control-C

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Enables the default handling of Control-C signals to terminate the program.

```python
import signal

def allowCtrlC():
    """Allow Control-C to end program."""
    signal.signal(signal.SIGINT, signal.SIG_DFL)
```

---

### logToFile

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Configures logging to write messages to a specified file.

```APIDOC
## Log to File

### Description
Sets up a file handler for the logger to direct log messages to a specified file path. It also allows setting the logging level.

### Method
`logToFile(path: str, level: int = logging.INFO)`

### Parameters
- **path** (str) - The file path where log messages will be written.
- **level** (int, optional) - The minimum logging level to record. Defaults to `logging.INFO`.

### Example
```python
import logging

def logToFile(path, level=logging.INFO):
    """Create a log handler that logs to the given file."""
    logger = logging.getLogger()
    if logger.handlers:
        logging.getLogger("ib_async").setLevel(level)
    else:
        logger.setLevel(level)

    formatter = logging.Formatter("%(asctime)s %(name)s %(levelname)s %(message)s")
    handler = logging.FileHandler(path)
    handler.setFormatter(formatter)
    logger.addHandler(handler)

# Configure logging to a file
logToFile("app.log", level=logging.DEBUG)
logging.info("This is an informational message.")
logging.warning("This is a warning message.")
```
```

---

### FlexReport

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for accessing and processing IB Flex Query data.

```APIDOC
## FlexReport

### Constants and Errors
- **FLEXREPORT_URL**: The base URL for Flex queries.
- **FlexError**: Custom exception for Flex query errors.

### FlexReport Class
Handles fetching and processing of Flex Query reports.

- **data** (any) - The raw data from the Flex query.
- **root** (xml.etree.ElementTree.Element) - The root element of the parsed XML data.
- **topics()**: Returns a list of available topics in the report.
- **extract()**: Extracts data based on specified criteria.
- **df()**: Returns the extracted data as a pandas DataFrame.
- **get_url()**: Generates the URL for a Flex query.
- **download()**: Downloads a Flex query report.
- **load()**: Loads a Flex query report from a file.
- **save()**: Saves a Flex query report to a file.
```

---

### Run Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Manages the asyncio event loop. If no awaitables are provided, it runs the loop indefinitely or until tasks are cancelled. If awaitables are given, it runs them to completion, optionally with a timeout.

```python
import asyncio
from typing import Awaitable

# Assuming getLoop() is defined elsewhere and returns the event loop
def getLoop():
    try:
        return asyncio.get_running_loop()
    except RuntimeError:
        return asyncio.new_event_loop()

def run(*awaitables: Awaitable, timeout: float | None = None):
    """
    By default run the event loop forever.

    When awaitables (like Tasks, Futures or coroutines) are given then
    run the event loop until each has completed and return their results.

    An optional timeout (in seconds) can be given that will raise
    asyncio.TimeoutError if the awaitables are not ready within the
    timeout period.
    """
    loop = getLoop()
    if not awaitables:
        if loop.is_running():
            return

        loop.run_forever()
        result = None
        all_tasks = asyncio.all_tasks(loop)  # type: ignore

        if all_tasks:
            # cancel pending tasks
            f = asyncio.gather(*all_tasks)
            f.cancel()
            try:
                loop.run_until_complete(f)
            except asyncio.CancelledError:
                pass
    else:
        if len(awaitables) == 1:
            future = awaitables[0]
        else:
            future = asyncio.gather(*awaitables)

        if timeout:
            future = asyncio.wait_for(future, timeout)
```

---

### schedule

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Schedules a callback function to be executed at a specific time with given arguments. Returns an Event Handle.

```APIDOC
## schedule

### Description
Schedules the callback to be run at the given time with the given arguments. This will return the Event Handle.

### Method
`schedule`

### Parameters
#### Arguments
- **time** (Time_t) - Required - Time to run callback. If given as `datetime.time` then use today as date.
- **callback** (Callable) - Required - Callable scheduled to run.
- **args** - Required - Arguments for to call callback with.

### Response Example
```json
{
  "event_handle": "<Event Handle>"
}
```
```

---

### FlexReport Class

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

The FlexReport class provides methods to download, load, save, and extract data from Interactive Brokers' Flex Web Service reports.

```APIDOC
## Class: FlexReport

### Description
Provides access to account statement webservice for downloading and processing financial reports.

### Initialization
- `__init__(self, token=None, queryId=None, path=None)`: Initializes the FlexReport. Downloads a report if `token` and `queryId` are provided, or loads from a file if `path` is provided.

### Methods
- `topics(self)`: Returns a set of topics (XML tags with attributes) available in the report.
- `extract(self, topic: str, parseNumbers=True)`: Extracts items of a given `topic` and returns them as a list of objects. `parseNumbers` attempts to convert values to float or int.
- `df(self, topic: str, parseNumbers=True)`: Similar to `extract`, but returns the result as a pandas DataFrame.
- `get_url(self)`: Generates the base URL for the Flex Web Service, using the `IB_FLEXREPORT_URL` environment variable if set, otherwise using the default URL.
- `download(self, token, queryId)`: Downloads a report using the provided `token` and `queryId`. It handles the asynchronous nature of report generation and retries until the report is ready.
- `load(self, path)`: Loads report data from an XML file at the specified `path`.
- `save(self, path)`: Saves the current report data to an XML file at the specified `path`.

### Error Handling
- `FlexError`: Custom exception raised for errors during download or processing.
```

---

### Load Flex Report from XML

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/flexreport.html

Load a Flex report from an XML file. This method reads the file content and parses it into an ElementTree object for further processing.

```python
with open(path, "rb") as f:
            self.data = f.read()
            self.root = et.fromstring(self.data)
```

---

### Type Checking Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for checking object types.

```APIDOC
## ib_async.util.isnamedtupleinstance

### Description
Check if an object is an instance of a named tuple. Based on https://stackoverflow.com/a/2166841/6067848

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **bool** (bool) - True if the object is a named tuple instance, False otherwise.
```

---

### Generate FlexReport URL

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Generates the URL for accessing a specific FlexReport based on the provided credentials or configuration.

```python
get_url()
```

---

### Numerical Utilities

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for numerical operations.

```APIDOC
## ib_async.util.isNan

### Description
Not a number test.

### Method
N/A

### Endpoint
N/A

### Response
#### Success Response (200)
- **bool** (bool) - True if the input is NaN, False otherwise.
```

```APIDOC
## ib_async.util.formatSI

### Description
Format the integer or float n to 3 significant digits + SI prefix.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Query Parameters
- **n** (int | float) - Required - The number to format.
```

---

### Format Datetime for IB

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Formats a date or datetime object into the string format used by Interactive Brokers.

```python
ib_async.util.formatIBDatetime(_t_)
```

---

### Format Datetime for IB API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Converts Python datetime or date objects into the string format expected by the Interactive Brokers API. Handles timezone conversion to UTC and formats the output string accordingly. Accepts None, datetime, date, or string inputs.

```python
def formatIBDatetime(t: dt.date | dt.datetime | str | None) -> str:
    """Format date or datetime to string that IB uses."""
    if not t:
        s = ""
    elif isinstance(t, dt.datetime):
        # convert to UTC timezone
        t = t.astimezone(tz=dt.timezone.utc)
        s = t.strftime("%Y%m%d %H:%M:%S UTC")
    elif isinstance(t, dt.date):
        t = dt.datetime(t.year, t.month, t.day, 23, 59, 59).astimezone(
            tz=dt.timezone.utc
        )
        s = t.strftime("%Y%m%d %H:%M:%S UTC")
    else:
        s = t

    return s
```
