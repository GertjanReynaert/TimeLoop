import React from 'react';

import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';

import HeaderTimer from '../components/HeaderTimer';
import HeaderEvent from '../components/HeaderEvent';

import * as TimerActions from '../actions/TimerActions';
import * as EventActions from '../actions/EventActions';

export default class TimerApp {
  render() {
    return (
      <Connector select={state => ({ timers: state.timers })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ timers, dispatch }) {
    const timerActions = bindActionCreators(TimerActions, dispatch);
    const eventActions = bindActionCreators(EventActions, dispatch);

    let lastTimer = timers[timers.length - 1];

    return (
      <div>
        <HeaderTimer lastTimer={lastTimer} startTimer={timerActions.startTimer} stopTimer={timerActions.stopTimer}/>
        <HeaderEvent lastTimer={lastTimer} addEvent={eventActions.addEvent}/>
      </div>
    );
  }
}
