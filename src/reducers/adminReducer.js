import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function adminReducer(state = initialState.admin, action) {
  switch (action.type) {
    case types.ADMIN:
      return action.admin;

    default:
      return state;
  }
}