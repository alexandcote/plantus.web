// @flow
import * as AuthActions from '../actions/auth';

type State = ?string

const session = (state: State = null, action: Object) => {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
      return action.jwt;
    case AuthActions.LOGOUT:
    case AuthActions.LOGIN_ERROR:
      return null;
    default:
      return state;
  }
};

export default session;
