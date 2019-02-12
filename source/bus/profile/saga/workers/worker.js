import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';

export function* createPost() {
  try {
    yield put(uiActions.startFetching());
    
    const response = yield apply(api, api.posts.fetch);
    const {data: post, message} = yield apply(response, response.json);
    
    if (response.status !== 200) {
      throw new Error(message);
    }
    
    yield put.resolve(postActions.fetchPostsAsync());
  } catch(error) {
    yield put(uiActions.emitError(error, 'createPost worker'));
  } finally {
    yield put(uiActions.stopFetching());
  }
}