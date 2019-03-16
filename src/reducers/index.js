import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import trigger from './triggerReducer';
import datetime from './datetimeReducer';
import startDate from './startDateReducer';
import errors from './errorReducer';

const rootReducer = combineReducers({
	trigger,
	datetime,
	startDate,
  errors,
  ajaxCallsInProgress
});

export default rootReducer;
