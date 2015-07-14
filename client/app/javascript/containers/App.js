import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

import Main from '../components/main';

const reducer = combineReducers(reducers)
const store = createStore(reducer);

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <Main />}
      </Provider>
    );
  }
}
