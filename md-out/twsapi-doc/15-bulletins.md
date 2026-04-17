*   [TWS API](../index.md)
*   [TWS API Documentation](index.md)
*   [15 Bulletins](15-bulletins.md)

## Bulletins

From time to time, IB sends out important [News Bulletins](https://ibkrguides.com/tws/usersguidebook/realtimeactivitymonitoring/bulletins%20and%20system%20status.htm), which can be accessed via the TWS API through the EClient.reqNewsBulletins. Bulletins are delivered via IBApi.EWrapper.updateNewsBulletin whenever there is a new bulletin. In order to stop receiving bulletins you need to cancel the subscription.