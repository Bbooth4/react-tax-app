import * as types from './actionTypes';
import database from '../database/firebase.js';
// import * as models from '../../../server/models';

// export function loadPosts(posts) {
//   return {type: types.LOAD_POSTS, posts};
// }
const loadPostsActions = () => {
  return {
    type: types.LOAD_POSTS
  };
}

const instantiatePostsActions = (posts) => {
  return {
    type: types.INSTANTIATE_POSTS
  };
}

// const grabPostsActions = () => {
//   models.posts.findAll()
//     .then((res) => {
//       console.log(res);
//       return res;
//     }).catch((err) => {
//       console.error(err);
//     })
// }

// export function instantiatePost() {
//   return (dispatch, getState) => {
//     return models.posts.findAll()
//       .then((res) => {
//         console.log(res);
//         dispatch(instantiatePostsActions(res));
//       }).catch((err) => {
//         console.error(err);
//       })
//   }
// }

// export function loadPost() {
//   return (dispatch, getState) => {
//     return 
//       dispatch(loadPostsActions(articles))
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }
// }

export function loadPost() {
  return dispatch => {
    dispatch(loadPostsActions());
    return database.ref('/').once('value', snap => {
      console.log(snap)
      const articles = snap.val();
      dispatch(loadPostsActions(articles))
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

