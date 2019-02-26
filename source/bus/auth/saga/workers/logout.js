import { put, apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../actions';
import { profileActions } from '../../../profile/actions';
import { postActions } from '../../../posts/actions';
import { usersActions } from '../../../users/actions';
import { book } from '../../../../navigation/book';

export function* logout() {
  try {
    yield put(uiActions.startFetching());
    const response = yield apply(api, api.auth.logout);

    if (response.status !== 204) {
      const { message } = yield apply(response, response.json);
      throw new Error(message);
    }
  } catch(error) {
    yield put(uiActions.emitError(error, 'logout worker'));
  } finally {
    yield apply(localStorage, localStorage.removeItem, ['token']);
    yield apply(localStorage, localStorage.removeItem, ['remember']);
    yield put(profileActions.clearProfile());
    yield put(postActions.clearPosts());
    yield put(postActions.clearPosts());
    yield put(usersActions.clearUsers());
    yield put(authActions.logout());
    yield put(replace(book.login));
  }
}