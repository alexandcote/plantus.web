// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as PlacesActions from '../actions/places';

function* getPlace(id: string) {
  try {
    const place = yield call(api.getPlace, id);
    yield put(PlacesActions.placeSuccess(place));
  } catch (error) {
    yield put(PlacesActions.placeError(error));
  }
}

function* placesSaga(): * {
  while (true) {
    const { id } = yield take(PlacesActions.PLACE_REQUEST);
    yield call(getPlace, id);
  }
}

export default placesSaga;
