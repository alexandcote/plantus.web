// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as OperationActions from '../actions/operation';

function* operationSaga(): * {
  while (true) {
    const { id } = yield take(OperationActions.OPERATION_REQUEST);
    try {
      const operation = yield call(api.newOperation, id);
      yield put(OperationActions.operationSuccess(operation));
    } catch (error) {
      yield put(OperationActions.operationError(error));
    }
  }
}

export default operationSaga;
