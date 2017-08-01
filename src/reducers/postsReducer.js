import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS:
      return [
        ...state,
        Object.assign({}, action.posts)
      ];

    case types.INSTANTIATE_POSTS:
      

    case types.CREATE_POSTS:
      return [
        ...state,
        Object.assign({}, action.posts)
      ];

    default:
      return state;
  }
}
