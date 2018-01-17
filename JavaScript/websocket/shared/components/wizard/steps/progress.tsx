import * as React from 'react';
import {Proto, CancelToken} from 'contidio-sdk';
import WizardStep from "../step";
import {WizardStepProps} from "../step";
import {WizardNavigation, WizardNavigationType} from "../wizard";
import {browserHistory} from 'react-router';
import ServerTasks, {ServerTasksProgress} from "../../serverTasks/serverTasks";

interface WizardStepProgressProps extends WizardStepProps {
  process: () => Promise<Proto.ServerTaskResponse> | Promise<Proto.ServerTaskResponse>[];
  uploadProgress?: {loaded: number, total: number};
  redirectTo?: string;
  cancelToken?: CancelToken;
  spinningWheelOnly?: boolean;
  onChange?: (progress: ServerTasksProgress) => void;
  backHandler?: () => void;
  title?: string;
  titleSuccess?: string;
  titleError?: string;
  autoNext?: boolean;
  keepNavigation?: boolean;
}

interface WizardStepProgressState {
  entityUuid?: string;
  progress?: ServerTasksProgress;
}

class WizardStepProgress extends React.Component<WizardStepProgressProps, WizardStepProgressState> {

  step: any;

  parentCancelHandler: any;

  constructor(props: WizardStepProgressProps) {
    super(props);
    this.state = {
      progress: null
    };
    this.parentCancelHandler = props.cancel.handler;
  }

  getWrappedInstance() {
    return this.step;
  }

  handleCancel(event?: MouseEvent) {

    event && event.preventDefault();

    const {progress} = this.state;

    if (!progress || !progress.loaded) {
      if (this.props.cancelToken) {
        this.props.cancelToken.cancel();
      }
    }

    this.parentCancelHandler();
  }

  handleChange(progress: ServerTasksProgress) {

    const {onChange, spinningWheelOnly, autoNext} = this.props;

    this.setState({progress}, () => {

      this.props.setNavigation(() => {
        if (((spinningWheelOnly && progress.hasCompletedAllRequiredTasks) || (autoNext && progress.hasCompletedAllTasks)) && progress.errors.length == 0) {
          return this.props.next.handler();
        }
      });

      onChange && onChange(progress);

    });
  }

  getNavigation() {

    const {redirectTo, backHandler} = this.props;
    const {progress} = this.state;

    let navigation: WizardNavigation;

    navigation = {
      back: Object.assign({}, this.props.back, {
        enabled: false
      }),
      next: Object.assign({}, this.props.next, {
        enabled: false,
        hidden: this.props.type == WizardNavigationType.CENTERED,
        label: 'wizard.skip'
      }),
      cancel: {
        enabled: true,
        handler: this.handleCancel.bind(this),
        label: this.props.keepNavigation ? 'wizard.cancel' : progress && progress.loaded ? 'wizard.close' : 'wizard.cancel'
      }
    };

    if (backHandler) {
      navigation.back.handler = backHandler;
    }

    if (progress) {

      if (progress.hasCompletedAllRequiredTasks || progress.hasCompletedAllTasks) {

        if (progress.errors.length == 0) {
          navigation.next.enabled = true;
          navigation.next.hidden = false;
        }

        if (redirectTo) {
          navigation.next.handler = (event?: MouseEvent) => {
            event && event.preventDefault();
            browserHistory.push({pathname: redirectTo});
          };
        }
      }

      if (progress.hasCompletedAllTasks) {
        navigation.cancel.enabled = (this.props.keepNavigation) ? true : progress.errors.length > 0;
        navigation.back.enabled = progress.errors.length > 0;

        if (progress.errors.length == 0) {
          navigation.next.label = 'wizard.next';
        }
      }

    }

    return navigation;
  }

  render() {

    let wizardStepProps = Object.assign({}, this.props, {...this.getNavigation()});

    let taskProps: any = {};

    if (this.props.title) {
      taskProps.title = this.props.title;
    }
    if (this.props.titleSuccess) {
      taskProps.titleSuccess = this.props.titleSuccess;
    }
    if (this.props.titleError) {
      taskProps.titleError = this.props.titleError;
    }

    return (
      <WizardStep {...wizardStepProps} ref={(step: any) => { this.step = step; }}>
        <div className="input-row">
          {!this.props.error &&
          <ServerTasks
            process={this.props.process}
            uploadProgress={this.props.uploadProgress}
            onChange={this.handleChange.bind(this)}
            spinningWheelOnly={this.props.spinningWheelOnly}
            {...taskProps}
          />
          }
        </div>
      </WizardStep>
    );
  }

}

export default WizardStepProgress;
