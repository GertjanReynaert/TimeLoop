import React from 'react';

import { Connector } from 'redux/react';

import Timer from '../components/timer';

export default class Header {
  render() {
    return (
      <Connector select={state => ({ timers: state.timers })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ timers }) {
    return (
      <div className="col-md-12">
        {
          timers.map( timer => <Timer timer={timer} key={timer.id} /> )
        }
      </div>
    );
  }
}
