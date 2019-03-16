import action from "./mirrorActions";
import * as utils from "../utilities";

export function setDatetimeSuccess(datetime) {
	return {
		type: action.SET_DATETIME_SUCCESS,
		datetime
	};
}

export function setDatetimeFailed(message) {
	return {
		type: action.SET_DATETIME_FAILED,
		message
	};
}

export function getDatetimeSuccess(datetime) {
	return {
		type: action.GET_DATETIME_SUCCESS,
		datetime
	};
}

export function getDatetimeFailed(message) {
	return {
		type: action.GET_DATETIME_FAILED,
		message
	};
}

export function getDatetime() {
	return function (dispatch, getState) {
		const datetime = getState().datetime;
		dispatch(getDatetimeSuccess(datetime));
	}
}

export function setDatetime(datetime) {
	return function (dispatch) {
		const datetimeOut = {
			startDatetime: new Date(1900, 0, 1, 0, 0, 0),
			datepickerDatetime: new Date(1900, 0, 1, 0, 0, 0),
			currentDatetime: new Date(),
			baseDatetime: new Date(1900, 0, 1, 0, 0, 0),
			addYears: 0,
			addMonths: 0,
			addDays: 0,
			newDatetime: new Date(1900, 0, 1, 0, 0, 0)
		};

		if (datetime.datepickerDatetime && utils.isValidDate(datetime.datepickerDatetime)) {
			datetimeOut.datepickerDatetime = datetime.datepickerDatetime;
		}
		if (datetime.startDatetime && utils.isValidDate(datetime.startDatetime)) {
			datetimeOut.startDatetime = datetime.startDatetime;
		}
		if (datetime.baseDatetime && utils.isValidDate(datetime.baseDatetime)) {
			datetimeOut.baseDatetime = datetime.baseDatetime;
		}
		if (datetime.addDays && !isNaN(datetime.addDays) && datetime.addDays !== 0) {
			datetimeOut.addDays = datetime.addDays;
		}
		if (datetime.addMonths && !isNaN(datetime.addMonths) && datetime.addMonths) {
			datetimeOut.addMonths = datetime.addMonths;
		}
		if (datetime.addYears && !isNaN(datetime.addYears) && datetime.addYears) {
			datetimeOut.addYears = datetime.addYears;
		}
		dispatch(setDatetimeSuccess(datetimeOut));
	};
}

/*
datetime object
datetime: {
  startDatetime: "2019-02-25T00:00:00",
  datepickerDatetime: "2019-02-25T00:00:00",
  currentDatetime: "2019-02-25T00:00:00",
  baseDatetime: "2019-02-25T00:00:00",
  addYears: 0,
  addMonths: 0,
  addDays: 0,
  newDatetime: "2019-02-25T00:00:00"
}

*/
