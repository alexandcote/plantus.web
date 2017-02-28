// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as PlantsActions from '../actions/plants';

function* getPlants() {
  try {
    const plants = yield call(api.getPlants);
    console.log(plants);
    yield put(PlantsActions.plantsSuccess(plants));
  } catch (error) {
    yield put(PlantsActions.plantsError(error));
  }
}

function* plantsSaga(): * {
  while (true) {
    yield take(PlantsActions.PLANTS_REQUEST);
    yield call(getPlants);
  }
}

export default plantsSaga;
