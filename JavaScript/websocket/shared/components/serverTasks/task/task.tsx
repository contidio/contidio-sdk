import * as React from 'react';
import {Proto} from 'contidio-sdk';

import {FormattedMessage} from 'react-intl';

export interface TaskProps {
  completed: boolean;
  error: boolean;
  percentage?: number;
  messageId: string;
  type?: Proto.ServerTaskType;
}

const Task = (props: TaskProps) => {

  let progress: string = !props.completed ? '('+Math.round(props.percentage)+'%)' : '';

  let className = 'progress-task-entry';

  if (props.error) {
    className += ' has-error';
  } else {
    className += props.completed ? ' completed' : ' loading';
  }

  let icon = (<div className="load-icon grey"></div>);
  if (props.error) {
    icon = (<i className="icon icon-delete"/>);
  } else if (props.completed) {
    icon = (<i className="icon icon-ok"/>);
  }

  return (
    <li className={className}>
      <FormattedMessage id={props.messageId} values={{progress}}/>
      {icon}
    </li>
  );
};

export default Task;
