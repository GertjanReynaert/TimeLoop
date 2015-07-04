import { ADD_EVENT } from '../constants/ActionTypes';

export function addEvent(title) {
  return {
    type: ADD_EVENT,
    title
  };
}
