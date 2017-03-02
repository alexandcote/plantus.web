// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import plants from './plants';
import plant from './plant';
import { LOGOUT } from '../actions/auth';

const plantusApp = combineReducers({
  routing: routerReducer,
  auth,
  plants,
  plant,
});

export default (state: {routing: {}}, action: Object) => {
  let newState = state;
  if (action.type === LOGOUT) {
    const { routing } = state;
    newState = { routing };
  }
  return plantusApp(newState, action);
};
