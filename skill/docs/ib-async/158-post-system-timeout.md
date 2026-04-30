### POST /system/timeout

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Configures network timeout settings for the TWS/IBG connection.

```APIDOC
## POST /system/timeout

### Description
Sets a timeout for receiving messages from TWS/IBG. Emits a timeoutEvent if no data is received within the specified duration.

### Method
POST

### Request Body
- **timeout** (float) - Required - Timeout in seconds.

### Response
#### Success Response (200)
- **status** (string) - Confirmation of timeout setting.
```
