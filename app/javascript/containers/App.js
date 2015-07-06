import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'redux/react';
import * as reducers from '../reducers';

import TimerApp from './TimerApp';

const store = createStore(reducers);

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <TimerApp />}
      </Provider>
    );
  }
}
