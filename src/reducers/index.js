// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';

const plantusApp = combineReducers({
  routing: routerReducer,
  auth,
});

export default plantusApp;
