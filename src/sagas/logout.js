// @flow
import { put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOGIN } from '../routes';
import * as AuthActions from '../actions/auth';

function* logoutSaga(): * {
  while (true) {
    yield take(AuthActions.LOGOUT);
    yield put(push(LOGIN()));
  }
}

export default logoutSaga;
