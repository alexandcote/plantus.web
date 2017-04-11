// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as TimeseriesActions from '../actions/timeseries';

function* timeseriesSaga(): * {
  while (true) {
    const { id } = yield take(TimeseriesActions.TIME_SERIES_REQUEST);
    try {
      const timeseries = yield call(api.getTimeseries, id);
      yield put(TimeseriesActions.timeseriesSuccess(timeseries));
    } catch (error) {
      yield put(TimeseriesActions.timeseriesError(error));
    }
  }
}

export default timeseriesSaga;
