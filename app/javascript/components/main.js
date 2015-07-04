import React, { Component } from 'react';

import Navigation from './navigation';
import Timer from './timer';

export default class MainComponent extends Component {
  render() {
    return (
      <div id="app">
        <Navigation/>
        <div className="col-md-12">
          {
            this.state.timers.map( timer => <Timer timer={timer} /> )
          }
        </div>
      </div>
    );
  }
}
