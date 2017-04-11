// @flow
import type Timeseries from '../types/timeseries';

export const TIME_SERIES_REQUEST = 'TIME_SERIES_REQUEST';
export const TIME_SERIES_SUCCESS = 'TIME_SERIES_SUCCESS';
export const TIME_SERIES_ERROR = 'TIME_SERIES_ERROR';

export const timeseriesRequest = (id: number) => ({
  type: TIME_SERIES_REQUEST,
  id,
});

export const timeseriesSuccess = (timeseries: [Timeseries]) => ({
  type: TIME_SERIES_SUCCESS,
  timeseries,
});

export const timeseriesError = (error: string) => ({
  type: TIME_SERIES_ERROR,
  error,
});
