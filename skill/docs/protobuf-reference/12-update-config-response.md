[IBKR TWS API](../../SKILL.md) · [Protobuf Reference](index.md) · [12 UpdateConfigResponse](12-update-config-response.md)


## UpdateConfigResponse

**reqId:** `Integer` – Request identifier  
**status:** `String` – Status of the request for modification.  
**message:** `String` – Response message about the changes. Successful changes will return “Configuration updated”.  
**changedFields:** `String` – List of fields changed by the updateConfigProtoBuf request.  
**errors:** `String` – Any errors that arose during setting changes.  
**warnings:** `UpdateConfigWarning` – Any additional warnings that arose from changing settings.

Success:

```generic
reqId: 1784381601
status: "success"
message: "Configuration updated"
changedFields: "configuration.api.settings.createApiMessageLogFile"
changedFields: "configuration.api.settings.includeMarketDataInLogFile"
changedFields: "configuration.api.settings.loggingLevel"
```

Failed:

```generic
reqId: 1784381601
status: "error"
message: "Validating configuration update request has failed"
errors: "configuration.lockAndExit.autoLogoffTime"
errors: "configuration.lockAndExit.autoLogoffPeriod"
errors: "configuration.lockAndExit.autoLogoffType"
```
