import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

import TimerApp from './TimerApp';

const redux = createStore(stores);

export default class App {
  render() {
    return (
      <Provider redux={redux}>
        {() => <TimerApp />}
      </Provider>
    );
  }
}
