import * as React from 'react';
import {createSelector} from 'reselect';
import {Interface as StoreInterface} from '../../../application/store/frontendStore';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {EntityState} from "../../../entities/store/ducks/entity";
import {browserHistory} from 'react-router';
import BrandColors from '../brandColors/brandColors';
import {setWrapperClass, makeWrapperClassSnapshot, restoreWrapperClassSnapshot, SetWrapperClass} from "../../store/ducks/wrapperClass";
import Loader from "../loader/loader";
import {getErrorTranslation} from "../../utils/error";
import {getTranslation, setTitle} from "../../utils/helpers";
import {CurrentBrandState} from "../../../authentication/store/ducks/currentBrand";
import {trackWizardStep} from "../../utils/tracking";
import {BackendUserState} from "../../../authentication/store/ducks/backendUser";
import {Proto} from "contidio-sdk";

const get = require('lodash/get');
const merge = require('lodash/merge');
const slice = require('lodash/slice');

interface WizardProps {
  brandingEntity?: EntityState;
  brandingBrand?: CurrentBrandState;
  currentBrand?: CurrentBrandState;
  backendUser?: BackendUserState;
  className?: string;
  title?: string;
  redirectRoute?: string;
  backgroundIcon?: string;
  navigationType?: WizardNavigationType;
  onClose?: (finished?: boolean) => void;

  // injected props
  setWrapperClass?: SetWrapperClass;
  makeWrapperClassSnapshot?: () => void;
  restoreWrapperClassSnapshot?: () => void;
}

interface WizardState {
  navigation?: WizardNavigation;
  currentStep?: number;
  isLoading?: boolean;
  initializationError?: Error;
  validationError?: Error;
  prevSelectOpen?: boolean;
}

export interface WizardNavigationButton {
  enabled?: boolean;
  handler?: () => void;
  label?: string;
  hidden?: boolean;
}

export interface WizardNavigation {
  cancel?: WizardNavigationButton;
  back?: WizardNavigationButton;
  next?: WizardNavigationButton;
  type?: WizardNavigationType;
}

export interface WizardStepOuterProps {
  initialize?: () => void;
  initializeMessage?: string | any;
  initializeProgress?: any;
  validator?: () => Promise<any>;
  wizardWrapperClass?: string;
  disableNavigation?: boolean;
  hideProgress?: boolean;
  disableEnter?: boolean;
}

export const enum WizardNavigationType {
  DEFAULT,
  CENTERED
}

class Wizard extends React.Component<WizardProps, WizardState> {

  currentStep: any;

  constructor(props: WizardProps) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      currentStep: 0,
      prevSelectOpen: false
    };
  }

  componentWillMount() {
    this.setNavigation();
  }

  componentDidMount() {
    this.props.makeWrapperClassSnapshot();
    this.props.setWrapperClass('scroll-lock no-content-nav');
    document.addEventListener('keydown', this.handleKeyPress);
    this.navigate(0);

    trackWizardStep(this.props.backendUser.data, this.props.currentBrand.uuid, 1, this.props.title, this.getChildCount())

    if(this.props.title){
      setTitle(getTranslation(this.props.title));
    }
  }

  componentWillUnmount() {
    this.props.restoreWrapperClassSnapshot();
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event: any) {

    if (this.state.prevSelectOpen) {
      return;
    }

    if (!this.state.prevSelectOpen && event.keyCode === 27) {
      this.handleCancel();
    }
    if (event.keyCode === 13) {

      if (!this.state.prevSelectOpen && this.getCurrentStepInstance().props.disableEnter !== true) {
        this.state.navigation.next.handler();
      }
      event.preventDefault();
    }

    if (document.getElementsByClassName("Select").length > 0) {
      this.setState({
        prevSelectOpen: document.getElementsByClassName("Select-menu-outer").length > 0
      });
    }

  }

  onClose(finished?: boolean) {
    if (this.props.onClose) {
      this.props.onClose(finished);
    } else if (this.props.redirectRoute) {
      window.setTimeout(() => {
        browserHistory.push({
          pathname: this.props.redirectRoute
        });
      }, 0);
    }
  }

  handleCancel(event?: MouseEvent) {
    event && event.preventDefault();
    this.state.navigation.cancel.enabled && this.onClose(false);
  }

  initializeStep() {

    let step = this.getCurrentStepInstance();

    if (step.props.initialize) {

      let initialize = step.props.initialize();

      if (initialize instanceof Promise) {

        this.setState({isLoading: true, initializationError: null});

        initialize.then(() => {
          this.setState({isLoading: false});
          this.setNavigation();
        }).catch((initializationError) => {
          console.log(initializationError);
          this.setState({isLoading: false, initializationError});
        });

      }
    }
  }

  navigate(currentStep: number) {
    this.setState({currentStep, initializationError: null, validationError: null}, () => {
      this.initializeStep();
      this.setNavigation();
    });
  }

  handleBack(event?: MouseEvent) {
    event && event.preventDefault();
    this.state.navigation.back.enabled && this.navigate(this.state.currentStep - 1);
  }

  handleNext(event?: MouseEvent) {

    event && event.preventDefault();

    if (!this.state.navigation.next.enabled) {
      return;
    }

    this.validateStep().then(() => {
      if (this.state.currentStep === this.getChildCount() - 1) {
        this.onClose(true);
      } else {
        this.navigate(this.state.currentStep + 1);

        trackWizardStep(this.props.backendUser.data, this.props.currentBrand.uuid,this.state.currentStep + 1, this.props.title, this.getChildCount())
      }
    }).catch((error) => {
      console.log(error);
      this.setState({validationError: error});
    });
  }

  validateStep(): Promise<any> {

    const currentStep = this.getCurrentStepInstance();

    if (currentStep.props.validator) {
      return currentStep.props.validator();
    }

    return Promise.resolve();
  }

  getChildCount(): number {
    return React.Children.toArray(this.props.children).filter((element) => element).length;
  }

  getCurrentStepComponent() {
    const {currentStep} = this.state;
    return slice(React.Children.toArray(this.props.children).filter((element) => element), currentStep, currentStep + 1)[0];
  }

  getCurrentStepInstance() {

    let currentStep = this.currentStep;

    if (!currentStep) {
      return null;
    }

    while (currentStep.getWrappedInstance) {
      currentStep = currentStep.getWrappedInstance();
    }

    return currentStep;
  }

  setNavigation(callback?: any) {

    let navigation: WizardNavigation = {
      type: this.props.navigationType || WizardNavigationType.DEFAULT
    };

    let step = this.getCurrentStepInstance();

    navigation.cancel = merge({
      enabled: true,
      handler: this.handleCancel.bind(this),
      label: 'wizard.cancel'
    }, get(step, 'props.cancel', {}));

    navigation.back = merge({
      enabled: this.state.currentStep > 0,
      handler: this.handleBack.bind(this),
      label: 'wizard.back'
    }, get(step, 'props.back', {}));

    navigation.next = merge({}, {
      enabled: this.state.currentStep < this.getChildCount(),
      handler: this.handleNext.bind(this),
      label: this.state.currentStep === this.getChildCount() - 1 ? 'wizard.done' : 'wizard.next'
    }, get(step, 'props.next', {}));

    this.setState({navigation}, callback);

  }

  render() {

    const {className, title, backgroundIcon, brandingEntity, brandingBrand} = this.props;
    const {currentStep, initializationError, validationError, navigation} = this.state;

    let step = this.getCurrentStepComponent();

    let classes = ['wizard-body'];

    if (className) {
      classes.push(className);
    }

    if (step.props && step.props.wizardWrapperClass) {
      classes.push(step.props.wizardWrapperClass);
    }

    let stepProps = merge({
      ref: (currentStep: any) => {
        this.currentStep = currentStep;
      },
      error: validationError,
      setNavigation: this.setNavigation.bind(this)
    }, {...navigation}, step.props);

    let brandingEntityToUse = brandingEntity && brandingEntity.data ? brandingEntity.data : brandingBrand && brandingBrand.brand ? brandingBrand.brand : null;

    return (
      <form className="wizard" onSubmit={navigation.next.handler}>
        {(brandingEntityToUse) &&
          <BrandColors brand={(brandingEntityToUse as Proto.Entity)} />
        }
        <div className={classes.join(' ')}>

          {backgroundIcon &&
          <i className={"icon wizard-background-icon standalone icon-" + backgroundIcon}/>
          }

          {(!step.props.hideProgress && !(initializationError && currentStep == 0)) &&
          <div className="wizard-progress">
            <div className="wizard-progress-value" style={{width: ((currentStep+1) / this.getChildCount() * 100 + '%')}}></div>
            <div className="wizard-title">
              {getTranslation(title)}
              <span className="step-text">
                <FormattedMessage id="wizard.steps" values={{current: currentStep + 1, total: this.getChildCount()}}/>
              </span>
            </div>
          </div>
          }

          <div className="wizard-step-wrapper">
            {this.state.isLoading
              ?
              <div className="input-row">
                <Loader
                  messageId={step.props.initializeMessage}
                  progress={step.props.initializeProgress}
                />
              </div>
              :
              initializationError
                ?
                <div className="error-container">
                  <div className="alert warning">
                    {getErrorTranslation(initializationError)}
                  </div>
                </div>
                :
                React.cloneElement(step, stepProps)
            }
          </div>

          <div className="wizard-controls">

            {(!this.state.isLoading && navigation && !step.props.disableNavigation) &&
            <div>

              {(!navigation.cancel.hidden || initializationError || validationError) &&
              <a href="#" className={"wizard-control-link wizard-cancel-link" + (navigation.cancel.enabled ? '' : ' disabled')} onClick={navigation.cancel.handler}>
                <FormattedMessage id={navigation.cancel.label}/>
              </a>
              }

              {!(navigation.back.hidden) &&
              <a href="#" className={"wizard-control-link wizard-back-link" + (navigation.back.enabled ? '' : ' disabled')} onClick={navigation.back.handler}>
                <FormattedMessage id={navigation.back.label}/>
              </a>
              }

              {(navigation.type == WizardNavigationType.DEFAULT && !initializationError) &&
              <div>

                {!(navigation.next.hidden) &&
                <button type="submit" className={"wizard-control-link wizard-next-link" + (navigation.next.enabled ? '' : ' disabled')} onClick={navigation.next.handler}>
                  <FormattedMessage id={navigation.next.label}/>
                </button>
                }

              </div>
              }
            </div>
            }

          </div>

        </div>

      </form>
    );
  }

}

const selector = createSelector(
  (state: StoreInterface) => state.backendUser,
  (state: StoreInterface) => state.currentBrand,
  (backendUser, currentBrand) => {
    return {backendUser, currentBrand}
  });

export default connect<any, any, WizardProps>(selector, {setWrapperClass, makeWrapperClassSnapshot, restoreWrapperClassSnapshot}, null, {withRef: true})(Wizard);
