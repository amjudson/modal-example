import action from "./mirrorActions";

export function setStartDateSuccess(startDate) {
  return {
    type: action.SET_START_DATE_SUCCESS,
    startDate
  };
}

export function setStartDateFailed(message) {
  return {
    type: action.SET_START_DATE_FAILED,
    message
  };
}

export function getStartDateSuccess(startDate) {
  return {
    type: action.GET_START_DATE_SUCCESS,
    startDate
  };
}

export function getStartDateFailed(message) {
  return {
    type: action.GET_START_DATE_FAILED,
    message
  };
}

export function getStartDate() {
  return function (dispatch, getState) {
    const startDate = getState().startDate;
    dispatch(getStartDateSuccess(startDate));
  }
}

export function setStartDate(startDate) {
  return function(dispatch) {
    dispatch(setStartDateSuccess(startDate));
  };
}
