import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'redux/react';
import * as reducers from '../reducers';

import Main from '../components/main';

const store = createStore(reducers);

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <Main />}
      </Provider>
    );
  }
}
