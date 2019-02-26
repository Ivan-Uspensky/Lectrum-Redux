import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { postActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* deletePost({payload: id}) {
  try {
    yield put(uiActions.startFetching());
   
    const response = yield apply(api, api.posts.delete, [id]);
    if (response.status === 204) {
      yield put.resolve(postActions.fetchPostsAsync());
    } else {
      throw new Error(message);
    }
  } catch(error) {
    yield put(uiActions.emitError(error, 'deletePost worker'));
  } finally {
    yield put(uiActions.stopFetching());
  }
}