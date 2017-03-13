// @flow
import { call, put, take, fork } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as PlantsActions from '../actions/plants';

function* getPlants() {
  while (true) {
    yield take(PlantsActions.PLANTS_REQUEST);
    try {
      const plants = yield call(api.getPlants);
      yield put(PlantsActions.plantsSuccess(plants));
    } catch (error) {
      yield put(PlantsActions.plantsError(error));
    }
  }
}

function* newPlant() {
  while (true) {
    const { plant } = yield take(PlantsActions.NEW_PLANT_REQUEST);
    try {
      const thePlant = yield call(api.newPlant, plant);
      yield put(PlantsActions.newPlantSuccess(thePlant));
    } catch (error) {
      yield put(PlantsActions.newPlantError(error));
    }
  }
}

function* plantsSaga(): * {
  yield [
    fork(getPlants),
    fork(newPlant),
  ];
}

export default plantsSaga;
