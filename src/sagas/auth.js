// @flow
import { call, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api from '../services/plantus-api';
import { HOME } from '../routes';
import * as AuthActions from '../actions/auth';

function* login(action) {
  try {
    const jwt = yield call(api.auth, action.email, action.password);
    yield api.setToken(jwt);
    yield put(AuthActions.loginSuccess(jwt));
    yield put(push(HOME()));
  } catch (error) {
    yield put(AuthActions.loginError(error));
  }
}

function* authSaga(): * {
  while (true) {
    const action = yield take(AuthActions.LOGIN_REQUEST);
    yield call(login, action);
  }
}

export default authSaga;
