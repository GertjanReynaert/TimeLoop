import React from 'react';

import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';

import Main from '../components/main';

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
    const actions = bindActionCreators(TimerActions, dispatch);
    return <HeaderTimer timers={timers} action={actions} />;
  }
}

