// @flow
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actions/auth';

type State = ?string

const auth = (state: State = null, action: Object) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.jwt;
    case LOGOUT:
    case LOGIN_ERROR:
      return null;
    default:
      return state;
  }
};

export default auth;
