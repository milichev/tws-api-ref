### POST /disconnect

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Terminates the connection to the TWS or IB Gateway and clears session state.

```APIDOC
## POST /disconnect

### Description
Disconnects from the TWS or IB Gateway and resets all internal session state.

### Method
POST

### Endpoint
/disconnect

### Response
#### Success Response (200)
- **message** (string) - Disconnection confirmation
```
