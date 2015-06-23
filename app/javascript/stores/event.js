import { ADD_EVENT, START_TIMER } from 'constants/constants';
import Moment from 'Moment';

const initialState = [];

export default function event(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      let id = state[0] ? state[0].id + 1 : 0;

      let newEvent = {
        id: id,
        title: action.title,
        timestamp: new Moment()
      };

      return [newEvent, ...state];

    case START_TIMER:
      dispatch(ADD_EVENT);
  }

  return state;
}
