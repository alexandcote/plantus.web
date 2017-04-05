// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import session from './session';
import plants from './plants';
import plant from './plant';
import places from './places';
import place from './place';
import users from './users';
import plantTypes from './plant-types';
import timeseries from './timeseries';
import { LOGOUT } from '../actions/auth';

const plantusApp = combineReducers({
  routing: routerReducer,
  auth,
  session,
  plants,
  plant,
  places,
  place,
  users,
  plantTypes,
  timeseries,
});

export default (state: {routing: {}}, action: Object) => {
  let newState = state;
  if (action.type === LOGOUT) {
    const { routing } = state;
    newState = { routing };
  }
  return plantusApp(newState, action);
};
