## Bulletins

From time to time, IB sends out important [News Bulletins](https://ibkrguides.com/tws/usersguidebook/realtimeactivitymonitoring/bulletins%20and%20system%20status.htm), which can be accessed via the TWS API through the EClient.reqNewsBulletins. Bulletins are delivered via IBApi.EWrapper.updateNewsBulletin whenever there is a new bulletin. In order to stop receiving bulletins you need to cancel the subscription.

### Request IB Bulletins

#### EClient.reqNewsBulletins (

**allMessages:** bool. If set to true, will return all the existing bulletins for the current day, set to false to receive only the new bulletins.  
)

Subscribes to IB’s News Bulletins.

self.reqNewsBulletins(True)

### Receive IB Bulletins

#### EWrapper.updateNewsBulletin (

**msgId:** int. The bulletin’s identifier.

**msgType:** int. 1: Regular news bulletin; 2: Exchange no longer available for trading; 3: Exchange is available for trading.

**message:** String. The news bulletin context.

**origExchange:** String. The exchange where the message comes from.  
)

Provides IB’s bulletins

def updateNewsBulletin(self, msgId: int, msgType: int, newsMessage: str, originExch: str):
  print("News Bulletins. MsgId:", msgId, "Type:", msgType, "Message:", newsMessage, "Exchange of Origin: ", originExch)

### Cancel Bulletin Request

#### EClient.cancelNewsBulletin ()

Cancels IB’s news bulletin subscription.

self.cancelNewsBulletins()