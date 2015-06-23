import { ADD_EVENT } from '../constants/ActionTypes';

export function addEvent(title) {
  return {
    type: ADD_EVENT,
    title
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
