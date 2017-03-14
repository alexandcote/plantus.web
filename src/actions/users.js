// @flow
import type User from '../types/user';

export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_ERROR = 'USERS_ERROR';

export const usersRequest = () => ({
  type: USERS_REQUEST,
});

export const usersSuccess = (users: [User]) => ({
  type: USERS_SUCCESS,
  users,
});

export const usersError = (error: string) => ({
  type: USERS_ERROR,
  error,
});
