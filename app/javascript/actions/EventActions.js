import { ADD_EVENT } from '../constants/ActionTypes';

export function addEvent(timerId, title) {
  return {
    type: ADD_EVENT,
    timerId,
    title
  };
}
