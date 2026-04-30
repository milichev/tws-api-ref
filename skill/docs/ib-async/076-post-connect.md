### POST /connect

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Establishes a connection to a running TWS or IB Gateway application and synchronizes account data.

```APIDOC
## POST /connect

### Description
Connects the client to a TWS or IB Gateway instance. This method is blocking and initializes the synchronization of account data and orders.

### Method
POST

### Endpoint
/connect

### Parameters
#### Request Body
- **host** (str) - Optional - Host name or IP address (default: 127.0.0.1)
- **port** (int) - Optional - Port number (default: 7497)
- **clientId** (int) - Optional - Unique ID for the connection (default: 1)
- **timeout** (float) - Optional - Connection timeout in seconds (default: 4)
- **readonly** (bool) - Optional - Set to true for read-only mode (default: false)
- **account** (str) - Optional - Main account identifier

### Request Example
{
  "host": "127.0.0.1",
  "port": 7497,
  "clientId": 1
}

### Response
#### Success Response (200)
- **status** (string) - Connection status confirmation
```
