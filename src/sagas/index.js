// @flow
import { fork } from 'redux-saga/effects';
import authSaga from './auth';
import logoutSaga from './logout';
import plantsSaga from './plants';
import plantSaga from './plant';
import placesSaga from './places';
import placeSaga from './place';
import usersSaga from './users';
import plantTypeSaga from './plantTypes';
import timeseriesSaga from './timeseries';
import operationSaga from './operation';
import dashboardSaga from './dashboard';

export default function* root(): any {
  yield [
    fork(authSaga),
    fork(logoutSaga),
    fork(plantsSaga),
    fork(plantSaga),
    fork(placesSaga),
    fork(placeSaga),
    fork(usersSaga),
    fork(plantTypeSaga),
    fork(timeseriesSaga),
    fork(operationSaga),
    fork(dashboardSaga),
  ];
}
