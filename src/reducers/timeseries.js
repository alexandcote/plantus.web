// @flow
import * as TimeseriesActions from '../actions/timeseries';
import type Timeseries from '../types/timeseries';

type State = [Timeseries]

const timeseries = (state: State = [], action: Object) => {
  switch (action.type) {
    case TimeseriesActions.TIME_SERIES_SUCCESS:
      return action.timeseries;
    case TimeseriesActions.TIME_SERIES_ERROR:
      return [];
    default:
      return state;
  }
};

export default timeseries;
