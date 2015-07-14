import { START_TIMER, STOP_TIMER } from '../constants/ActionTypes';

export function startTimer(title) {
  return {
    type: START_TIMER,
    title
  };
}

export function stopTimer(id) {
  return {
    type: STOP_TIMER,
    id
  };
}
