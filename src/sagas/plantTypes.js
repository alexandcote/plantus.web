// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as PlantTypeActions from '../actions/plant-type';

function* plantTypeSaga(): * {
  while (true) {
    yield take(PlantTypeActions.PLANT_TYPE_REQUEST);
    try {
      const plantTypes = yield call(api.getPlantTypes);
      yield put(PlantTypeActions.plantTypeSuccess(plantTypes));
    } catch (error) {
      yield put(PlantTypeActions.plantTypeError(error));
    }
  }
}

export default plantTypeSaga;
