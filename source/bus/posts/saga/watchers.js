import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts, deletePost } from './workers';

export function* watchFetchPosts() {
  yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchCreatePosts() {
  yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchDeletePost() {
  yield takeEvery(types.DELETE_POST_ASYNC, deletePost);
}

export function* watchPosts() {
  yield all([
    call(watchFetchPosts), 
    call(watchCreatePosts),
    call(watchDeletePost)
  ]);
}