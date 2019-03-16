import action from './mirrorActions';

export function addError(errors) {
  return {
    type: action.ERROR_SET_SUCCESS,
    errors
  };
}

export function badError(message) {
  return {
    type: action.ERROR_SET_FAILED,
    message
  };
}
