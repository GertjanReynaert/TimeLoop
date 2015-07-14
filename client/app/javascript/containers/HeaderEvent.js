import React from 'react';

import { bindActionCreators } from 'redux';
import { Connector } from 'react-redux';

import HeaderEvent from '../components/HeaderEvent';

import * as EventActions from '../actions/EventActions';

export default class HeaderEventContainer {
  render() {
    return (
      <Connector select={state => ({ timers: state.timers })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ timers, dispatch }) {
    const eventActions = bindActionCreators(EventActions, dispatch);

    let lastTimer = timers[timers.length - 1];
    let runningTimer = lastTimer && lastTimer.isRunning ? lastTimer : undefined;

    return (
      <HeaderEvent runningTimer={runningTimer} addEvent={eventActions.addEvent}/>
    );
  }
}
