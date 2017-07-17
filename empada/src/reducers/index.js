import { combineReducers } from 'redux';
import admin from './adminReducer';
import posts from './postsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  admin,
  posts,
  routing: routerReducer
});

export default rootReducer;