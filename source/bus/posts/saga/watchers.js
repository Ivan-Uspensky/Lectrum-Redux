import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts } from './workers';

export function* watchPostsActions() {
  yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
  yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchPosts() {
  yield all([call(watchPostsActions)]);
}