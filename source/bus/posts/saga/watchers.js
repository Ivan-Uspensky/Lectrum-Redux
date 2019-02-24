import { takeEvery, all, call } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts, deletePost, likePost, unlikePost } from './workers';

export function* watchFetchPosts() {
  yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchCreatePosts() {
  yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchDeletePost() {
  yield takeEvery(types.DELETE_POST_ASYNC, deletePost);
}

export function* watchLikePost() {
  yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}

export function* watchUnlikePost() {
  yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePost);
}

export function* watchPosts() {
  yield all([
    call(watchFetchPosts), 
    call(watchCreatePosts),
    call(watchDeletePost),
    call(watchLikePost),
    call(watchUnlikePost)
  ]);
}