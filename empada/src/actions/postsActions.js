import * as types from './actionTypes';

export function loadPosts(posts) {
  return {type: types.LOAD_POSTS, posts};
}

export function loadPost() {
  return dispatch => {
    // database call here

    // return AuthorApi.getAllPost().then(post => {
    //   dispatch(loadPostSuccess(post));
    // }).catch(error => {
    //   throw(error);
    // });
  };
}
