import { ADD_EVENT, START_TIMER, STOP_TIMER } from '../constants/ActionTypes';
import { START, STOP } from '../constants/EventTypes';
import Moment from 'Moment';

const initialState = [];

export default function timers(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      let id = (state.length - 1) > 0 ? state[state.length - 1].id + 1 : 0;

      let startEvent = {
        id: 0,
        type: START,
        title: 'Started',
        timestamp: new Moment()
      }

      let newTimer = {
        id: id,
        title: action.title,
        isRunning: true,
        startedAt: new Moment(),
        events: [ startEvent ]
      };

      return [...state, newTimer];

    case STOP_TIMER:
      return state.map(timer => {
        if (timer.id === action.id) {
          let stopEvent = {
            id: newEventId(timer.events),
            type: STOP,
            title: 'Ended',
            timestamp: new Moment()
          };

          return {
            ...timer,
            isRunning: false,
            stoppedAt: new Moment(),
            events: [ ...timer.events, stopEvent ]
          };
        } else {
          return timer;
        }
      });

    case ADD_EVENT:
      let event = {
        id: 0,
        title: action.title,
        timestamp: new Moment()
      };

      return state.map(timer => {
        if (timer.id === action.timerId) {
          event.id = newEventId(timer.events);
          return { ...timer, events: [...timer.events, event] };
        } else {
          return timer;
        }
      }
      );
    default:
      return state;
  }
}

function newEventId(events) {
  let size = events.length;

  return size > 0 ? events[size - 1].id + 1 : 0;
}
