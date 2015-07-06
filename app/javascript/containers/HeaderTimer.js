import React from 'react';

import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';

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

    return (
      <HeaderTimer lastTimer={lastTimer} startTimer={timerActions.startTimer} stopTimer={timerActions.stopTimer}/>
    );
  }
}
