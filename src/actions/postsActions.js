import * as types from './actionTypes';
import axios from 'axios';

const loadPostsActions = (post) => {
  return {
    type: types.LOAD_POSTS
  };
}

export function loadPosts() {
  return dispatch => {
    return axios.get('/posts')
    .then(post => {
      console.log(post)
      dispatch(loadPostsActions(post));
    })
    .catch((error) => {
      console.log(error);
    });
  }

// const instantiatePostsActions = (posts) => {
//   return {
//     type: types.INSTANTIATE_POSTS
//   };
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

}

