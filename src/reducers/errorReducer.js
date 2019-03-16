import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function errorReducer(state = initialState.errors, action) {
  switch (action.type) {
    case actions.ADD_ERROR_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.error)
      ];
    default:
      return state;
  }
}
