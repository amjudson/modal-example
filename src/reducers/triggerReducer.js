import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function errorReducer(state = initialState.trigger, action) {
	switch (action.type) {
		case actions.SET_TRIGGER_SUCCESS:
			return action.trigger;
		case actions.GET_TRIGGER_SUCCESS:
			return action.trigger;
		default:
			return state;
	}
}
