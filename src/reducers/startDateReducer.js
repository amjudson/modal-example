import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function startDateReducer(state = initialState.startDate, action) {
  switch (action.type) {
    case actions.GET_START_DATE_SUCCESS:
      return action.startDate;
    case actions.SET_START_DATE_SUCCESS:
      return action.startDate;
    default:
      return state;
  }
}
