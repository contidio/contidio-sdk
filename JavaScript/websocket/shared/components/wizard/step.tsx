import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {WizardNavigationType, WizardNavigationButton, WizardStepOuterProps} from "./wizard";
import {getErrorTranslation} from "../../utils/error";

export interface WizardStepProps extends WizardStepOuterProps {
  className?: string;
  forcePrimary?: boolean;
  error?: Error;
  next?: WizardNavigationButton;
  back?: WizardNavigationButton;
  cancel?: WizardNavigationButton;
  type?: WizardNavigationType;
  setNavigation?: (callback?: any) => {};
}

export interface WizardStepState {

}

class WizardStep extends React.Component<WizardStepProps, WizardStepState> {

  constructor(props: WizardStepProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setNavigation();
  }

  render() {

    const {forcePrimary, children, className, error, type, disableNavigation, next} = this.props;

    return (
      <div className={"wizard-step" + (className ? ' ' + className : '') + (error ? ' error' : '')}>

        {children}

        {error &&
        <div className="alert warning">
          {getErrorTranslation(error)}
        </div>
        }

        <div className="input-row">

          {(type == WizardNavigationType.CENTERED && !next.hidden && !disableNavigation) &&
          <div className="button-container center">
            <a className={"button " + (forcePrimary ? "button-primary" : "button-secondary") + (next.enabled ? '' : ' disabled')} href="#" onClick={next.handler}>
              <FormattedMessage id={next.label}/>
            </a>
          </div>
          }

        </div>

      </div>
    );
  }

}

export default WizardStep;
