import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { worker } from './workers';

export function* watchFetchPosts() {
  yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchCreatePosts() {
  yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}


export function* watchPosts() {
  yield all([call(watchFetchPosts), call(watchCreatePosts)]);
}