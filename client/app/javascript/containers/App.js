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
socket.register('github_update', (payload) => processEvent(payload, "github"));
socket.register('trello_update', (payload) => processEvent(payload, "trello"));

function runningTimer() {
  debugger
  let state = store.getState();
  let { timers } = state
  let lastTimer = timers[timers.length - 1];
  return lastTimer && lastTimer.isRunning ? lastTimer : undefined;
}

function processEvent(payload, eventType) {
  debugger
  console.log(payload)
  store.dispatch(addEvent(runningTimer.id, eventType, payload.title))
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
