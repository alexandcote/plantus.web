// @flow
import { call, put, take } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import http from '../services/plantus-http';
import api from '../services/plantus-api';
import { HomeRoute } from '../routes';
import * as AuthActions from '../actions/auth';

function* authSaga(): * {
  while (true) {
    const action = yield take(AuthActions.LOGIN_REQUEST);
    try {
      const jwt = yield call(api.auth, action.email, action.password);
      yield http.setToken(jwt);
      yield put(AuthActions.loginSuccess(jwt));
      yield put(push(HomeRoute()));
    } catch (error) {
      yield put(AuthActions.loginError(error));
    }
  }
}

export default authSaga;
