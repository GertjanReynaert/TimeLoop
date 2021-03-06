import React from 'react';

import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';

import HeaderTimer from '../components/HeaderTimer';

import * as TimerActions from '../actions/TimerActions';

export default class HeaderTimerContainer {
  render() {
    return (
      <Connector select={state => ({ timers: state.timers })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ timers, dispatch }) {
    const timerActions = bindActionCreators(TimerActions, dispatch);

    let lastTimer = timers[timers.length - 1];
    let runningTimer = lastTimer && lastTimer.isRunning ? lastTimer : undefined;

    return (
      <HeaderTimer runningTimer={runningTimer} startTimer={timerActions.startTimer} stopTimer={timerActions.stopTimer}/>
    );
  }
}
