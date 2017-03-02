// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as PlantsActions from '../actions/plants';

function* getPlant(id: string) {
  try {
    const plant = yield call(api.getPlant, id);
    yield put(PlantsActions.plantSuccess(plant));
  } catch (error) {
    console.log(error);
    yield put(PlantsActions.plantError(error));
  }
}

function* plantsSaga(): * {
  while (true) {
    const { id } = yield take(PlantsActions.PLANT_REQUEST);
    yield call(getPlant, id);
  }
}

export default plantsSaga;
