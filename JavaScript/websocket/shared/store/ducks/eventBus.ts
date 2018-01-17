import Action from "../action";
import {User} from 'oidc-client';

import {Proto} from "contidio-sdk";
import {guid} from "../../utils/helpers";

export type EVENT_BUS_REQUEST = {};

export const EVENT_BUS_CONNECT_REQUEST = 'eventBus/CONNECT';
export const EVENT_BUS_INITIALIZE_SERVER_TASKS_FOR_TRANSACTION_REQUEST = 'eventBus/INITIALIZE_SERVER_TASKS_FOR_TRANSACTION';

const EVENT_BUS_CONNECTED = 'eventBus/EVENT_BUS_CONNECTED';
const EVENT_BUS_DISCONNECTED = 'eventBus/EVENT_BUS_DISCONNECTED';
const EVENT_BUS_MESSAGE_RECEIVED = 'eventBus/EVENT_BUS_MESSAGE_RECEIVED';

export interface EventBusState {
  connected: boolean;
  eventBusAddress?: string;
  serverTaskStore: ServerTaskStoreTransaction[];
  uuid: string;
}

const initialState: EventBusState = {
  connected: false,
  eventBusAddress: null,
  serverTaskStore: [],
  uuid: ''
};

export interface ServerTaskStoreTransaction {
  uuid: string;
  createdTimestamp: Date;
  tasks: ServerTaskStoreTask[];
}

export interface ServerTaskStoreTask {
  uuid: string;
  completedPercentage: number;
  isError?: boolean;
  backendErrorCode?: Proto.BackendErrorCode;
  backendErrorMessage?: string;
  issuedTimestamp: Long;
  entityTaskType: Proto.ServerTaskType;
  tasks: ServerTaskStoreTask[];
}

// reducers

export default function reducer(state: EventBusState = initialState, action: Action<EVENT_BUS_REQUEST, EventBusState>): EventBusState {
  if (action.type === EVENT_BUS_CONNECTED) {
    return Object.assign({}, state, {
      connected: true,
      eventBusAddress: action.payload
    });
  }
  else if (action.type === EVENT_BUS_DISCONNECTED) {
    return Object.assign({}, state, {
      connected: false,
      eventBusAddress: null
    });
  }
  else if (action.type === EVENT_BUS_MESSAGE_RECEIVED) {
    let serverTaskStore = [].concat(state.serverTaskStore);

    let eventBusMessage: Proto.EventBusMessage = action.payload;
    const {serverTaskProgress} = eventBusMessage;

    if (serverTaskProgress) {
      // console.log("Updating store with transaction update data", serverTaskProgress);

      serverTaskStore = handleServerTaskProgress(serverTaskProgress, serverTaskStore);
    }

    return Object.assign({}, state, {serverTaskStore, uuid: guid()});
  }
  else if (action.type == EVENT_BUS_INITIALIZE_SERVER_TASKS_FOR_TRANSACTION_REQUEST) {
    let serverTaskStore = [].concat(state.serverTaskStore);

    if (action.payload) {
      // console.log("Initializing store with transaction seed data", action.payload);

      let serverTaskProgress = action.payload as Proto.ServerTaskProgress;
      // console.log(serverTaskProgress);

      serverTaskStore = handleServerTaskProgress(serverTaskProgress, serverTaskStore);
    }

    // console.log(serverTaskStore);

    return Object.assign({}, state, {serverTaskStore, uuid: guid()});
  }

  return state;
}

// reducer helpers

export function handleServerTaskProgress(serverTaskProgress: Proto.ServerTaskProgress, serverTaskStore: ServerTaskStoreTransaction[]) {
  if (serverTaskProgress.transactionUuid) {
    let transactionUuid = serverTaskProgress.transactionUuid;

    let existingServerTaskStoreTransaction = serverTaskStore.find((entry) => {
      return entry.uuid === transactionUuid;
    });

    if (!existingServerTaskStoreTransaction) {
      existingServerTaskStoreTransaction = {
        uuid: transactionUuid,
        createdTimestamp: new Date(),
        tasks: []
      };

      serverTaskStore.push(existingServerTaskStoreTransaction);

      // console.log("Adding new transaction " + transactionUuid + " (created " + existingServerTaskStoreTransaction.createdTimestamp + ")");
    }

    handleServerTaskTransaction(serverTaskProgress, existingServerTaskStoreTransaction);
  }

  return cleanupServerTaskStore(serverTaskStore);
}

function cleanupServerTaskStore(serverTaskStore: ServerTaskStoreTransaction[]) {
  let finalServerTaskStoreTransactions: ServerTaskStoreTransaction[] = [];

  let now = new Date();

  serverTaskStore.forEach((serverTaskStoreTransaction: ServerTaskStoreTransaction) => {
    let diffMs = now.getTime() - serverTaskStoreTransaction.createdTimestamp.getTime();

    // after 15 minutes we'll not need the tasks anymore

    if (diffMs < 1000 * 60 * 15) {
      finalServerTaskStoreTransactions.push(serverTaskStoreTransaction);
    }
    else {
      // console.log("Clearing old transaction " + serverTaskStoreTransaction.uuid);
    }
  });

  return finalServerTaskStoreTransactions;
}

export function handleServerTaskTransaction(serverTaskProgress: Proto.ServerTaskProgress, serverTaskStoreTransaction: ServerTaskStoreTransaction) {
  if (serverTaskProgress.serverTaskProgressTask && serverTaskProgress.serverTaskProgressTask.length > 0) {
    serverTaskProgress.serverTaskProgressTask.forEach((entry) => {
      let existingServerTaskStoreTask = findServerTaskStoreTask(serverTaskStoreTransaction, entry.taskUuid);

      if (existingServerTaskStoreTask) {
		if (entry.completedPercentage >= existingServerTaskStoreTask.completedPercentage) {
			existingServerTaskStoreTask.completedPercentage = entry.completedPercentage;
			existingServerTaskStoreTask.isError = serverTaskProgress.backendErrorCode != null;
			existingServerTaskStoreTask.backendErrorCode = serverTaskProgress.backendErrorCode;
			existingServerTaskStoreTask.backendErrorMessage = serverTaskProgress.backendErrorMessage;
		} else {
			// console.log("New task is older than existing task, ignoring");
			
			return;
		}
      } else {	  
        existingServerTaskStoreTask = {
          uuid: entry.taskUuid,
          completedPercentage: entry.completedPercentage,
          isError: serverTaskProgress.backendErrorCode != null,
          backendErrorCode: serverTaskProgress.backendErrorCode,
          backendErrorMessage: serverTaskProgress.backendErrorMessage,
          issuedTimestamp: entry.issuedTimestamp,
          entityTaskType: entry.type,
          tasks: []
        };

        serverTaskStoreTransaction.tasks.push(existingServerTaskStoreTask);
      }

      handleServerTasksCreatedTasks(serverTaskStoreTransaction, serverTaskProgress, existingServerTaskStoreTask.tasks, existingServerTaskStoreTask.uuid);
    });
  } else {
    handleServerTasksCreatedTasks(serverTaskStoreTransaction, serverTaskProgress, serverTaskStoreTransaction.tasks, null);
  }
}

function handleServerTasksCreatedTasks(serverTaskStoreTransaction: ServerTaskStoreTransaction, serverTaskProgress: Proto.ServerTaskProgress, serverTaskStoreTasks: ServerTaskStoreTask[], 
	parentUuid?: string) 
{
  if (serverTaskProgress.serverTaskCreated && serverTaskProgress.serverTaskCreated.length > 0) {
    serverTaskProgress.serverTaskCreated.forEach((createdEntry) => {
	  let existingServerTaskStoreTask = findServerTaskStoreTask(serverTaskStoreTransaction, createdEntry.taskUuid);
	    
      if (!existingServerTaskStoreTask) {
        // console.log("Adding new created task " + createdEntry.taskUuid + " to " + (parentUuid ? parentUuid : "transaction"));

        serverTaskStoreTasks.push({
          uuid: createdEntry.taskUuid,
          completedPercentage: 0,
          issuedTimestamp: createdEntry.issuedTimestamp,
          entityTaskType: createdEntry.type,
          tasks: []
        });
      }
    });
  }
}

function findServerTaskStoreTask(serverTaskStoreTransaction: ServerTaskStoreTransaction, serverTaskUuid: string): ServerTaskStoreTask {
  // console.log("Searching for " + serverTaskUuid + " in transaction");

  if (serverTaskStoreTransaction.tasks.length > 0) {
    for (let i = 0; i < serverTaskStoreTransaction.tasks.length; i++) {
      let entry = serverTaskStoreTransaction.tasks[i];

      if (entry.uuid === serverTaskUuid)
        return entry;

      let foundServerTaskStoreTask = findServerTaskStoreTaskChild(entry, serverTaskUuid);
      if (foundServerTaskStoreTask)
        return foundServerTaskStoreTask;
    }
  }

  return null;
}

function findServerTaskStoreTaskChild(serverTaskStoreTask: ServerTaskStoreTask, serverTaskUuid: string): ServerTaskStoreTask {
  // console.log("Searching for " + serverTaskUuid + " in " + serverTaskStoreTask.uuid);

  if (serverTaskStoreTask.tasks.length > 0) {
    for (let i = 0; i < serverTaskStoreTask.tasks.length; i++) {
      let entry = serverTaskStoreTask.tasks[i];

      if (entry.uuid === serverTaskUuid)
        return entry;

      let foundServerTaskStoreTask = findServerTaskStoreTaskChild(entry, serverTaskUuid);
      if (foundServerTaskStoreTask)
        return foundServerTaskStoreTask;
    }
  }

  return null;
}

// actions

function requestConnectEventBus(): Action<EVENT_BUS_REQUEST, User> {
  return {
    type: EVENT_BUS_CONNECT_REQUEST,
    payload: null
  };
}

export function connectEventBus() {
  return (dispatch: any) => {
    dispatch(requestConnectEventBus());
  };
}

export function requestInitializeEventBus(serverTaskResponse: Proto.ServerTaskResponse): Action<EVENT_BUS_REQUEST, any> {
  return {
    type: EVENT_BUS_INITIALIZE_SERVER_TASKS_FOR_TRANSACTION_REQUEST,
    payload: {...serverTaskResponse} as Proto.ServerTaskProgress
  }
}

export interface InitializeEventBus {
  (serverTaskResponse: Proto.ServerTaskResponse): void;
}

export function initializeEventBus(serverTaskResponse: Proto.ServerTaskResponse) {
  return (dispatch: any) => {
    if (!serverTaskResponse || !serverTaskResponse.serverTaskCreated || serverTaskResponse.serverTaskCreated.length == 0) {
      return Promise.resolve();
    }
    return dispatch(requestInitializeEventBus(serverTaskResponse));
  };
}

export function eventBusConnected(eventBusAddress: string): Action<EVENT_BUS_REQUEST, any> {
  return {
    type: EVENT_BUS_CONNECTED,
    payload: eventBusAddress
  };
}

export function eventBusDisconnected(): Action<EVENT_BUS_REQUEST, User> {
  return {
    type: EVENT_BUS_DISCONNECTED,
    payload: null
  };
}

export function eventBusMessageReceived(eventBusMessage: Proto.EventBusMessage): Action<EVENT_BUS_REQUEST, any> {
  return {
    type: EVENT_BUS_MESSAGE_RECEIVED,
    payload: eventBusMessage
  };
}

