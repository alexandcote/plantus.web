// @flow
import { REHYDRATE } from 'redux-persist/constants';
import * as AuthActions from '../actions/auth';

type State = ?boolean

const auth = (state: State = false, action: Object): State => {
  switch (action.type) {
    case AuthActions.AUTH_READY:
      return true;
    case REHYDRATE:
      if (
        (Object.keys(action.payload).length === 0 && action.payload.constructor === Object) ||
        !action.payload.session
      ) {
        return null;
      }
      return state;
    case AuthActions.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default auth;
