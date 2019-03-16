
// These actions are used to set triggers in 'state'
// trigger is an object that contains items to trigger or check if something
//    should happen or not
// The trigger is set with a trigger payload
// example 1: trigger.isChanged = true
// example 2: trigger['isChanged'] = true
// example 3: const strIsChanged = 'isChanged'; trigger[strIsChanged] = true

import action from "./mirrorActions";
import * as utils from "../utilities";

export function setTriggerSuccess(trigger) {
	return {
		type: action.SET_TRIGGER_SUCCESS,
		trigger
	};
}

export function setTriggerFailed(message) {
	return {
		type: action.SET_TRIGGER_FAILED,
		message
	};
}

export function getTriggerSuccess(trigger) {
	return {
		type: action.GET_TRIGGER_SUCCESS,
		trigger
	};
}

export function getTriggerFailed(message) {
	return {
		type: action.GET_TRIGGER_FAILED,
		message
	};
}

export function getTrigger() {
	return function (dispatch, getState) {
		const trigger = getState().trigger;
		dispatch(getTriggerSuccess(trigger));
	}
}

export function setTrigger(trigger) {
	return function (dispatch) {
		dispatch(setTriggerSuccess(trigger));
	};
}

/*
trigger object example
trigger: { // setup any thing as a boolean to be used in a pure component
}

*/
