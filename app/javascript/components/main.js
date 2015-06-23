import React, { Component } from 'react';
import Moment from 'Moment';

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
  startedAt: new Moment().subtract(7, 'days'),
  endedAt: new Moment().subtract(2, 'minutes'),
  events: [
    {
      id: 1,
      title: 'Started',
      timestamp: new Moment().subtract(7, 'days')
    }, {
      id: 2,
      title: 'Commit #123456',
      timestamp: new Moment().subtract(30, 'minutes')
    }, {
      id: 5,
      title: 'Commit #654321',
      timestamp: new Moment().subtract(10, 'minutes')
    }, {
      id: 6,
      title: 'Ended',
      timestamp: new Moment().subtract(2, 'minutes')
    }
  ]
}, {
  id: 321,
  title: 'Testje',
  startedAt: new Moment().subtract(7, 'days'),
  endedAt: new Moment().subtract(2, 'minutes'),
  events: [
    {
      id: 7,
      title: 'Started',
      timestamp: new Moment().subtract(7, 'days')
    }, {
      id: 8,
      title: 'Commit #123456',
      timestamp: new Moment().subtract(30, 'minutes')
    }, {
      id: 11,
      title: 'Commit #654321',
      timestamp: new Moment().subtract(10, 'minutes')
    }, {
      id: 12,
      title: 'Ended',
      timestamp: new Moment().subtract(2, 'minutes')
    }
  ]
}];
