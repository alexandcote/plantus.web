// @flow
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const AUTH_READY = 'AUTH_READY';

export const loginRequest = (email: string, password: string) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});

export const loginSuccess = (jwt: string) => ({
  type: LOGIN_SUCCESS,
  jwt,
});

export const loginError = (error: string) => ({
  type: LOGIN_ERROR,
  error,
});

export const logout = () => ({
  type: LOGOUT,
});

export const authReady = () => ({
  type: AUTH_READY,
});
