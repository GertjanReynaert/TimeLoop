import { ADD_EVENT, START_TIMER, STOP_TIMER } from '../constants/ActionTypes';
import Moment from 'Moment';

const initialState = [];

export default function timers(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      let id = (state.length - 1) > 0 ? state[state.length - 1].id + 1 : 0;

      let newTimer = {
        id: id,
        title: action.title,
        startedAt: new Moment(),
        events: []
      };

      return [...state, newTimer];

    case STOP_TIMER:
      return state.map(timer =>
        timer.id === action.id ?
          { ...timer, stoppedAt: new Moment() } :
          timer
      );

    case ADD_EVENT:
      let event = {
        id: 0,
        title: action.title,
        timestamp: new Moment()
      };

      return state.map(timer => {
        if (timer.id === action.timerId) {
          event.id = timer.events.length > 0 ? timer.events[timer.events.length - 1].id + 1 : 0;
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
