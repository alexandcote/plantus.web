// @flow
import { put, take } from 'redux-saga/effects';
import * as DashboardActions from '../actions/dashboard';
import * as TimeseriesActions from '../actions/timeseries';

function* dashboardSaga(): * {
  while (true) {
    const { id } = yield take(DashboardActions.CHANGE_SELECTED_PLANT);
    yield put(TimeseriesActions.timeseriesRequest(id));
  }
}

export default dashboardSaga;
