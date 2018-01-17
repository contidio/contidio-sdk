import {Interface as StoreInterface} from '../../../application/store/frontendStore';

import {
  EVENT_BUS_CONNECT_REQUEST, connectEventBus, eventBusConnected, eventBusDisconnected, eventBusMessageReceived
} from '../ducks/eventBus';

import {getApiEnvironmentFromState} from '../../utils/environment';
import {ApiClient, Proto} from "contidio-sdk";
import EventBusMessage = Proto.EventBusMessage;
import {guid} from "../../utils/helpers";

let eventBus: any = null;
let addr: string = null;
let retryCount: number = 0;
let tryingToReconnect: boolean = false;

const eventBusMiddleware = (function () {
  function setupEventBus(store: any) {
    let state: StoreInterface = store.getState();

    let environment = getApiEnvironmentFromState(state);

    (require as any).ensure(['vertx3-eventbus-client'], () => {
      const EventBus: any = require('vertx3-eventbus-client');

      eventBus = new EventBus(ApiClient.ENDPOINT_MDIDX.getApiEndpointUrl(environment, false) + '/api/v1/eventBus/');

      eventBus.onopen = function () {

        addr = addr || guid();

        //console.log("EVENTBUS: Connected with address " + addr);

        store.dispatch(eventBusConnected(addr));

        eventBus.registerHandler(addr, function (error: any, message: any) {
          if (message.body) {
            //console.log("EVENTBUS: Message received");

            let eventBusMessage: EventBusMessage = JSON.parse(message.body) as EventBusMessage;

            store.dispatch(eventBusMessageReceived(eventBusMessage));
          } else {
            //console.log("EVENTBUS: Invalid message received, dumping error object", error);
          }
        });
      };

      eventBus.onerror = function(error: any) {
        //console.log("EVENTBUS: Error", error);

        store.dispatch(eventBusDisconnected());

        tryReconnect(store);
      };

      eventBus.onclose = function () {
        //console.log("EVENTBUS: Disconnected");

        store.dispatch(eventBusDisconnected());

        tryReconnect(store);
      }

    });

  }

  function tryReconnect(store:any) {
    if (!tryingToReconnect) {
      tryingToReconnect = true;

      // exponential backoff

      let waitTime: number = retryCount * retryCount * 1000;

      //console.log("EVENTBUS: Retry " + retryCount + ": waiting " + (waitTime / 1000) + " secs for reconnect");

      setTimeout(function () {
        retryCount++;

        //console.log("EVENTBUS: Trying to reconnect (retry " + retryCount + ")...");

        tryingToReconnect = false;

        store.dispatch(connectEventBus());
      }, waitTime);
    }
  }

  return (store: any) => (next: any) => (action: any) => {
    switch (action.type) {
      case EVENT_BUS_CONNECT_REQUEST:
        setupEventBus(store);
        break;
      default:
    }

    return next(action);
  };
})();

export default eventBusMiddleware;
