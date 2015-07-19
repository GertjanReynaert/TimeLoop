import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

import Main from '../components/main';
import Socket from '../socket';
import addEvent from '../actions/EventActions';

const reducer = combineReducers(reducers)
const store = createStore(reducer);

const socket = new Socket();
socket.register('github_update', (title) => processEvent(title, 'github'));
socket.register('trello_update', (title) => processEvent(title, 'trello'));

function runningTimer() {
  debugger
  let state = store.getState();
  let { timers } = state
  let lastTimer = timers[timers.length - 1];
  return lastTimer && lastTimer.isRunning ? lastTimer : undefined;
}

function processEvent(title, eventType) {
  console.log(title);
  store.dispatch(addEvent(runningTimer.id, eventType, title))
}

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <Main />}
      </Provider>
    );
  }
}
