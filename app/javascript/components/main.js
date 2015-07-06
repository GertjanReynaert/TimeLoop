import React, { Component } from 'react';

import Navigation from './navigation';
import Timer from './timer';

import TimerList from '../containers/List';

export default class Main extends Component {
  render() {
    return (
      <div id="app">
        <Navigation/>
        <TimerList/>
      </div>
    );
  }
}
