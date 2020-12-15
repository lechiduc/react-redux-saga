import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from 'src/slices/posts';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
