  [index.html](IBKR TWS API) -> 
  [28-setting-management.md](28 Setting Management) -> 

 28 Setting Management


## Setting Management

Beginning with TWS API 10.44, the API can be used to modify Trader Workstation settings as they relate to Orders, Precautions, and API Settings.  
While settings may be modified through this method, Read-Only access to the system must be first disabled manually through the GUI. See [TWS Settings](../undefined/index.md).

### Request Configuration

### 28.01 Request Configuration

**configRequestProto**: [ConfigRequestProto](../undefined/index.md)  
Contains the Proto object for the configuration request.  
Must have the reqId field passed.

#### )

from ibapi.protobuf.ConfigRequest\_pb2 import ConfigRequest as ConfigRequestProto

configRequestProto = ConfigRequestProto()
configRequestProto.reqId = 123
self.reqConfigProtoBuf(configRequestProto)

### Receive Configuration

### 28.02 Receive Configuration

**configResponseProto**: [ConfigResponseProto](../undefined/index.md)  
Contains the Proto response object for the configuration. Includes [LockAndExitConfig](../undefined/index.md), [MessageConfig](../undefined/index.md), [ApiConfig](../undefined/index.md), and [OrdersConfig](../undefined/index.md).

#### )

from ibapi.protobuf.ConfigResponse\_pb2 import ConfigResponse as ConfigResponseProto

def configResponseProtoBuf(self, configResponseProto: ConfigResponseProto):
    print(configResponseProto)

### Request Configuration Update

### 28.03 Request Configuration Update

**updateConfigRequestProto**: [UpdateConfigRequestProto](../undefined/index.md)  
Contains the Proto object for updating the configuration request.  
Must have the reqId field passed.

#### )

from ibapi.protobuf.UpdateConfigRequest\_pb2 import UpdateConfigRequest as UpdateConfigRequestProto
from ibapi.protobuf.ApiConfig\_pb2 import ApiConfig as ApiConfigProto
from ibapi.protobuf.ApiSettingsConfig\_pb2 import ApiSettingsConfig as ApiSettingsConfigProto

# Instantiate Proto Classes...
updateConfigRequestProto = UpdateConfigRequestProto()
apiConfigProto = ApiConfigProto()
apiSettingsConfigProto = ApiSettingsConfigProto()

# Assign the settings to change...
apiSettingsConfigProto.createApiMessageLogFile = True
apiSettingsConfigProto.includeMarketDataInLogFile = True
apiSettingsConfigProto.loggingLevel = "Detail"
        
# Copy nested Object content to parent...
apiConfigProto.settings.CopyFrom(apiSettingsConfigProto)
updateConfigRequestProto.reqId = orderId
updateConfigRequestProto.api.CopyFrom(apiConfigProto)

# Submit updates
self.updateConfigProtoBuf(updateConfigRequestProto)

### Receive Configuration Update

### 28.04 Receive Configuration Update

**updateConfigResponseProto**: [UpdateConfigResponseProto](../undefined/index.md)  
Contains the Proto response object for the configuration update. Includes message, changedFields, errors, and [UpdateConfigWarning.](../undefined/index.md)

#### )

from ibapi.protobuf.UpdateConfigResponse\_pb2 import UpdateConfigResponse as UpdateConfigResponseProto

def updateConfigResponseProtoBuf(self, updateConfigResponseProto: UpdateConfigResponseProto):
    print(updateConfigResponseProto)
