import { ADD_EVENT } from '../constants/ActionTypes';

export function addEvent(timerId, eventType, title) {
  return {
    type: ADD_EVENT,
    eventType,
    timerId,
    title
  };
}
