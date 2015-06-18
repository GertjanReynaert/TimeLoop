import React, { Component } from 'react';

import Navigation from './navigation';
import Timer from './timer';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: timers
    };
  }

  renderTimers() {
    return this.state.timers.map((timer) => {
      return <Timer timer={timer} key={timer.id}/>;
    });
  }

  render() {
    return (
      <div id="app">
        <Navigation/>
        <div className="col-md-12">
          {this.renderTimers()}
        </div>
      </div>
    );
  }
}

let timers = [{
  id: 123,
  title: 'Test',
  startedAt: new Date(),
  endedAt: new Date(),
  events: [
    {
      id: 1,
      title: 'Started',
      timestamp: new Date()
    }, {
      id: 2,
      title: 'Commit #123456',
      timestamp: new Date()
    }, {
      id: 3,
      title: 'Paused',
      timestamp: new Date()
    }, {
      id: 4,
      title: 'Restarted',
      timestamp: new Date()
    }, {
      id: 5,
      title: 'Commit #654321',
      timestamp: new Date()
    }, {
      id: 6,
      title: 'Ended',
      timestamp: new Date()
    }
  ]
}, {
  id: 321,
  title: 'Testje',
  startedAt: new Date(),
  endedAt: new Date(),
  events: [
    {
      id: 7,
      title: 'Started',
      timestamp: new Date()
    }, {
      id: 8,
      title: 'Commit #123456',
      timestamp: new Date()
    }, {
      id: 9,
      title: 'Paused',
      timestamp: new Date()
    }, {
      id: 10,
      title: 'Restarted',
      timestamp: new Date()
    }, {
      id: 11,
      title: 'Commit #654321',
      timestamp: new Date()
    }, {
      id: 12,
      title: 'Ended',
      timestamp: new Date()
    }
  ]
}];
