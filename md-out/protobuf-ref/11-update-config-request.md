*   [TWS API](../index.md)
*   [ProtoBuf Reference](index.md)
*   [11 UpdateConfigRequest](11-update-config-request.md)

## UpdateConfigRequest

**reqId**: `Integer` – Request identifier

**lockAndExit**: `LockAndExitConfig`– Container object for all Lock And Exit Configurations.

**messages**: `MessageConfig`– Container object for repeated message objects.

**api**: `ApiConfig` – Container object for API Configuration page details

**orders**: `OrdersConfig`– Container object for the Orders settings.

**acceptedWarnings**: `UpdateConfigWarning`– Container object for repeated warning objects

**resetApiOrderSequence**: `Boolean` – Determine if the Order ID sequence should be reset to 0.

updateConfigRequest = UpdateConfigRequest()
    updateConfigRequest.reqId = 123
    updateConfigRequest.lockAndExit = LockAndExitConfig
    updateConfigRequest.messages = MessageConfig
    updateConfigRequest.api = ApiConfig
    updateConfigRequest.orders = OrdersConfig
    updateConfigRequest.acceptedWarnings = UpdateConfigWarning
    updateConfigRequest.resetApiOrderSequence = True