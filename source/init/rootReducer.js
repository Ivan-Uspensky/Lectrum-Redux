import { combineReducers } from 'redux';
import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { authReducer as auth } from '../bus/auth/authReducer';

export const rootReducer = combineReducers({
  auth,
  posts,
  ui
});