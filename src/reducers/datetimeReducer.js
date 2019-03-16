import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function datetimeReducer(state = initialState.datetime, action) {
  switch (action.type) {
    case actions.GET_DATETIME_SUCCESS:
      return action.datetime;
    case actions.SET_DATETIME_SUCCESS:
      return action.datetime;
    default:
      return state;
  }
}
