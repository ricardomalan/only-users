import * as type from '../types';

export function getUsers() {
  return {
    type: type.GET_USERS_REQUESTED,
  };
}

export function clearUsers() {
  return {
    type: type.CLEAR_DATA,
  };
}
