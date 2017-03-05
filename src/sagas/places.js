// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as PlacesActions from '../actions/places';

function* getPlaces() {
  try {
    const places = yield call(api.getPlaces);
    yield put(PlacesActions.placesSuccess(places));
  } catch (error) {
    yield put(PlacesActions.placesError(error));
  }
}

function* placesSaga(): * {
  while (true) {
    yield take(PlacesActions.PLACES_REQUEST);
    yield call(getPlaces);
  }
}

export default placesSaga;
