// @flow
import { call, put, take } from 'redux-saga/effects';
import api from '../services/plantus-api';
import * as UsersActions from '../actions/users';

function* usersSaga(): * {
  while (true) {
    yield take(UsersActions.USERS_REQUEST);
    try {
      const users = yield call(api.getUsers);
      yield put(UsersActions.usersSuccess(users));
    } catch (error) {
      yield put(UsersActions.usersError(error));
    }
  }
}

export default usersSaga;
