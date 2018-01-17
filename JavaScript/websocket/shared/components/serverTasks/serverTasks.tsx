import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';
import {Proto, CancelError, BackendError} from 'contidio-sdk';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {
  initializeEventBus, EventBusState, ServerTaskStoreTransaction,
  ServerTaskStoreTask, InitializeEventBus
} from "../../store/ducks/eventBus";
import Task, {TaskProps} from "./task/task";
import {getErrorTranslation, isBackend} from "../../utils/error";
import Loader from "../loader/loader";
import {Interface as StoreInterface} from 'application/store/frontendStore';

let isArray = require('lodash/isArray');
let filter = require('lodash/filter');
let find = require('lodash/find');
let uniq = require('lodash/uniq');

interface ServerTasksProps {
  process: () => Promise<Proto.ServerTaskResponse> | Promise<Proto.ServerTaskResponses> | Promise<Proto.ServerTaskResponse>[];
  uploadProgress?: {loaded: number, total: number};

  onChange?: (progress: ServerTasksProgress) => void;
  spinningWheelOnly?: boolean;
  title?: string;
  titleSuccess?: string;
  titleError?: string;

  // injected props
  eventBus?: EventBusState;
  initializeEventBus?: InitializeEventBus;
}

interface ServerTasksState {
  entityUuid?: string;
  transactionUuids?: string[];
  loaded?: boolean;
  errors?: BackendError[];
  tasks?: TaskProps[];
  finishedProcesses?: number;
  totalProcesses?: number;
  completedProcesses?: any;
  startedAt?: Date;
}

export interface ServerTasksProgress {
  entityUuid?: string;
  loaded: boolean;
  hasCompletedAllRequiredTasks: boolean;
  hasCompletedAllTasks: boolean;
  errors: any[];
}

interface CompletedInformation {
  completed: boolean;
  completedPercentage: number;
  totalPercentage: number;
  error: BackendError;
}

const optionalTasks = [
  Proto.ServerTaskType.STT_BINARY_CHANGE
];

class ServerTasks extends React.Component<ServerTasksProps, ServerTasksState> {

  timer: any;

  delaying: boolean;

  constructor(props: ServerTasksProps) {
    super(props);

    this.state = {
      transactionUuids: [],
      tasks: [],
      finishedProcesses: 0,
      totalProcesses: 0,
      completedProcesses: {},
      errors: []
    };
  }

  componentDidMount() {
    this.runProcesses();
  }

  componentWillReceiveProps(nextProps: ServerTasksProps) {

    let newEventBus = nextProps.eventBus;
    let oldEventBus = this.props.eventBus;

    if (newEventBus.uuid !== oldEventBus.uuid) {
      this.setState({tasks: this.getServerTasks(nextProps), startedAt: new Date()}, () => {
        this.sendProgressInfo(nextProps);
      });
    }

  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  sendProgressInfo(props: ServerTasksProps) {

    let callback = () => {
      props.onChange({
        loaded: this.state.loaded,
        hasCompletedAllRequiredTasks: this.hasCompletedAllRequiredTasks(props),
        hasCompletedAllTasks: this.hasCompletedAllTasks(),
        errors: this.state.errors
      });

      if (this.hasCompletedAllTasks() && this.timer) {
        clearInterval(this.timer);
      }
    };

    if (this.hasCompletedAllTasks()) {
      this.delaying = true;
      window.setTimeout(() => {
        callback();
        this.delaying = false;
      }, 0);
    } else {
      callback();
    }
  }

  runProcesses() {

    let result = this.props.process();
    let processes: Promise<Proto.ServerTaskResponse | Proto.ServerTaskResponse[] | Proto.ServerTaskResponses>[];
    processes = (result instanceof Array) ? result : [result];

    let transactionUuids: string[] = [];

    this.setState({totalProcesses: processes.length, startedAt: new Date()}, () => {
      this.timer = setInterval(this.sendProgressInfo.bind(this, this.props), 1000);
    });

    processes.forEach((process) => {

      process.then((result) => {

        this.setState({finishedProcesses: this.state.finishedProcesses + 1}, () => {

          if (result) {

            let serverTaskResponses: Proto.ServerTaskResponse[] = [];

            result = (isArray(result) ? result : [result] as Proto.ServerTaskResponse[]);

            (result as Proto.ServerTaskResponse[]).forEach((serverTaskResponse) => {
              serverTaskResponses = serverTaskResponses.concat(((serverTaskResponse as Proto.ServerTaskResponses).serverTaskResponse) || [serverTaskResponse]);
            });

            serverTaskResponses.forEach((serverTaskResponse) => {

              transactionUuids.push(serverTaskResponse.transactionUuid);

              this.setState({transactionUuids}, () => {
                this.props.initializeEventBus(serverTaskResponse);
              });
            });
          }

        });

      }).catch((error) => {
        if (!(error instanceof CancelError)) {
          let errors = this.state.errors.slice(0);
          errors.push(error);
          this.setState({errors, finishedProcesses: this.state.finishedProcesses + 1}, () => {
            this.sendProgressInfo(this.props);
          });
        }
      });

    });

    Promise.all(processes).then(() => {
      this.setState({loaded: true}, () => {
        this.sendProgressInfo(this.props);
      });
    }).catch((error) => {
      this.setState({loaded: true}, () => {
        this.sendProgressInfo(this.props);
      });
    });
  }

  getServerTasks(props: ServerTasksProps): TaskProps[] {

    let transactions: ServerTaskStoreTransaction[] = filter(this.state.transactionUuids.map((uuid) => {
      return find(props.eventBus.serverTaskStore, {uuid});
    }));

    let allTasks: any = {};

    transactions.forEach((transaction) => {
      transaction.tasks.forEach((task) => {

        let completedInformation: CompletedInformation = {
          completed: false,
          completedPercentage: 0,
          totalPercentage: 0,
          error: null
        };

        this.sumTask(task, completedInformation);

        if (task.isError) {
          completedInformation.error = new BackendError(task.backendErrorCode, task.backendErrorMessage, null, 500);

          let errors = this.state.errors.slice(0);

          if (!find(errors, {errorCode: completedInformation.error.errorCode})) {
            errors.push(completedInformation.error);
            this.setState({errors});
          }
        }

        this.putCompletedInformation(task.entityTaskType, allTasks, completedInformation);
      });
    });

    return Object.keys(allTasks).map((type) => {

      const task = allTasks[type];

      let completed = task.completed;
      let error = task.error;

      return {
        completed,
        error,
        percentage: task.completedPercentage / task.totalPercentage * 100,
        messageId: 'wizard.progress.task.' + Proto.ServerTaskType[(parseInt(type))].toLowerCase(),
        type: parseInt(type)
      };
    });

  }

  putCompletedInformation(entityTaskType: Proto.ServerTaskType, allTasks: any, completedInformation: CompletedInformation) {
    let clonedCompletedInformation: CompletedInformation = null;

    if (!allTasks[entityTaskType]) {
      clonedCompletedInformation = {completed: false, error: null, completedPercentage: 0, totalPercentage: 0};
      allTasks[entityTaskType] = clonedCompletedInformation;
    } else {
      clonedCompletedInformation = allTasks[entityTaskType];
    }

    clonedCompletedInformation.completedPercentage += completedInformation.completedPercentage;
    clonedCompletedInformation.totalPercentage += completedInformation.totalPercentage;

    clonedCompletedInformation.error = completedInformation.error;

    clonedCompletedInformation.completed = clonedCompletedInformation.completedPercentage == clonedCompletedInformation.totalPercentage && this.state.loaded;
  }

  sumTask(task: ServerTaskStoreTask, completedInformation: CompletedInformation) {

    completedInformation.totalPercentage += 100;
    completedInformation.completedPercentage += task.completedPercentage;

    if (task.tasks && task.tasks.length > 0) {
      task.tasks.forEach((subTask) => {
        this.sumTask(subTask, completedInformation);
      });
    }
  }

  hasCompletedAllRequiredTasks(props?: ServerTasksProps) {

    props = props || this.props;

    if (!this.state.loaded) {
      return false;
    }

    let now = new Date();
    if ((now.getTime() - this.state.startedAt.getTime()) / 1000 > 30 || !props.eventBus.connected) {
      return true;
    }

    let allRequiredTasksFinished = true;

    this.state.tasks.forEach((task) => {
      if (optionalTasks.indexOf(task.type) == -1 && !task.completed) {
        allRequiredTasksFinished = false;
      }
    });

    return allRequiredTasksFinished;
  }

  hasCompletedAllTasks() {

    if (!this.state.loaded) {
      return false;
    }

    return this.state.tasks.filter((task) => !task.completed).length === 0;
  }

  renderTasks() {

    let tasks: TaskProps[] = [];

    const {uploadProgress, title, titleSuccess, titleError} = this.props;
    const {completedProcesses, totalProcesses, errors} = this.state;

    let uploadTask: TaskProps = {
      completed: this.state.loaded,
      error: null,
      messageId: uploadProgress ? 'wizard.progress.uploading' : 'wizard.progress.requesting',
      percentage: uploadProgress ? (uploadProgress.loaded / uploadProgress.total) * 100 : (completedProcesses / totalProcesses * 100)
    };

    tasks.push(uploadTask);
    tasks = tasks.concat(this.state.tasks);

    if (this.props.spinningWheelOnly) {
      if ((this.hasCompletedAllTasks() && !this.delaying) || errors.length > 0) {
        return null;
      }
      return (
        <div className="input-row">
          <Loader large={true}/>
        </div>
      );
    }

    return (
      <div className="input-row">
        <h3>
          {(this.hasCompletedAllTasks() && errors.length === 0)
            ? <FormattedMessage id={titleSuccess || "wizard.progress.headline.success"}/>
            : (errors.length > 0)
              ? <FormattedMessage id={titleError || "wizard.progress.headline.error"}/>
              : <FormattedMessage id={title || "wizard.progress.headline"}/>
          }

        </h3>

        <ul className="progress-tasks">
          {tasks.map((task) => {
            return <Task {...task} key={task.messageId}/>;
          })}
        </ul>
      </div>

    );
  }

  render() {

    const {errors} = this.state;

    let foundQuotaError = false;

    return (
      <div>

        <div className="input-row">
          {this.renderTasks()}
        </div>

        {(errors.length > 0) &&
        <div className="error-container">
          {(uniq(errors) as BackendError[]).map((error, index) => {

            if (isBackend(error) && error.errorCode == Proto.BackendErrorCode.BRAND_LISTED_ASSET_QUOTA_EXCEEDED) {

              if (foundQuotaError) {
                return null;
              }

              foundQuotaError = true;

              return (
                <div className="alert warning text-left" key={index}>
                  <span>{getErrorTranslation(error)}</span>
                  <Link to="/dashboard/plan" className="button button-contidio-secondary">
                    <FormattedMessage id="upload.quota.upgrade_button"/>
                  </Link>
                </div>
              );
            }

            return (
              <div className="alert warning" key={index}>
                {getErrorTranslation(error)}
              </div>
            );
          })}
        </div>
        }

      </div>
    );
  }

}

const selector = createSelector(
  (state: StoreInterface) => state.eventBus,
  (eventBus) => {
    return {eventBus}
  });

export default connect<any, any, ServerTasksProps>(selector, {initializeEventBus})(ServerTasks);
