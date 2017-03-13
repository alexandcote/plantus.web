// @flow
import * as AuthActions from '../actions/auth';

type State = boolean

const auth = (state: State = false, action: Object) => {
  switch (action.type) {
    case AuthActions.AUTH_READY:
      return true;
    default:
      return state;
  }
};

export default auth;
