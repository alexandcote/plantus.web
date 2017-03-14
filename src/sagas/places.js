// @flow
import { call, put, take, fork } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as PlacesActions from '../actions/places';

function* getPlaces() {
  while (true) {
    yield take(PlacesActions.PLACES_REQUEST);
    try {
      const places = yield call(api.getPlaces);
      yield put(PlacesActions.placesSuccess(places));
    } catch (error) {
      yield put(PlacesActions.placesError(error));
    }
  }
}

function* newPlace() {
  while (true) {
    const { place } = yield take(PlacesActions.NEW_PLACE_REQUEST);
    try {
      const thePlace = yield call(api.newPlace, place);
      yield put(PlacesActions.newPlaceSuccess(thePlace));
    } catch (error) {
      yield put(PlacesActions.newPlaceError(error));
    }
  }
}

function* placesSaga(): * {
  yield [
    fork(getPlaces),
    fork(newPlace),
  ];
}

export default placesSaga;
