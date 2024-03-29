import { selectJWT } from '../selectors';
import http from '../services/plantus-http';
import { authReady } from '../actions/auth';

const ApiAuthMiddleware = ({ getState }) => next => (action) => {
  const oldToken = selectJWT(getState());
  const result = next(action);
  const newToken = selectJWT(getState());
  if (oldToken !== newToken) {
    http.setToken(newToken);
    if (newToken) {
      next(authReady());
    }
  }
  return result;
};

export default ApiAuthMiddleware;
