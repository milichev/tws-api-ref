### ConnectionStats Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides statistics about an API connection, including start time, duration, and message/byte counts.

```APIDOC
## ConnectionStats Data Structure

### Description
Provides statistics about an API connection, including start time, duration, and message/byte counts.

### Fields
- **startTime** (string) - The start time of the connection.
- **duration** (integer) - The duration of the connection in seconds.
- **numBytesRecv** (integer) - The total number of bytes received.
- **numBytesSent** (integer) - The total number of bytes sent.
- **numMsgRecv** (integer) - The total number of messages received.
- **numMsgSent** (integer) - The total number of messages sent.
```
