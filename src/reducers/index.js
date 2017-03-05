// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import plants from './plants';
import plant from './plant';
import places from './places';
import place from './place';
import { LOGOUT } from '../actions/auth';

const plantusApp = combineReducers({
  routing: routerReducer,
  auth,
  plants,
  plant,
  places,
  place,
});

export default (state: {routing: {}}, action: Object) => {
  let newState = state;
  if (action.type === LOGOUT) {
    const { routing } = state;
    newState = { routing };
  }
  return plantusApp(newState, action);
};
