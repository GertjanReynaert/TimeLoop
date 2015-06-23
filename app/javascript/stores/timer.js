import { START_TIMER, STOP_TIMER } from 'constants/constants';
import Moment from 'Moment';

const initialState = [];

export default function timer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      let id = state[0] ? state[0].id + 1 : 0;

      let newTimer = {
        id: id,
        title: action.title,
        startedAt: new Moment()
      };

      return [newEvent, ...state];
    case STOP_TIMER:

  }

    return state;
}
