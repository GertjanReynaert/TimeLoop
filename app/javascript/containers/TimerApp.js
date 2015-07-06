import React from 'react';

import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';

import Navigation from '../components/navigation';
import Timer from '../components/timer';

import * as TimerActions from '../actions/TimerActions';
import * as EventActions from '../actions/EventActions';

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
    const eventActions = bindActionCreators(EventActions, dispatch);

    return (
      <div id="app">
        <Navigation lastTimer={timers[timers.length - 1]} timerActions={timerActions} eventActions={eventActions}/>
        <div className="col-md-12">
          {
            timers.map( timer => <Timer timer={timer} key={timer.id} /> )
          }
        </div>
      </div>
    )
  }
}
