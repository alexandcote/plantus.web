// @flow
import { fork } from 'redux-saga/effects';
import authSaga from './auth';
import logoutSaga from './logout';

export default function* root(): any {
  yield [
    fork(authSaga),
    fork(logoutSaga),
  ];
}
