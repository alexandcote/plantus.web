// @flow
import { put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LoginRoute } from '../routes';
import * as AuthActions from '../actions/auth';

function* logoutSaga(): * {
  while (true) {
    yield take(AuthActions.LOGOUT);
    yield put(push(LoginRoute()));
  }
}

export default logoutSaga;
