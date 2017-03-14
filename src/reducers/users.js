// @flow
import * as UsersActions from '../actions/users';
import type User from '../types/user';

type State = [User]

const users = (state: State = [], action: Object) => {
  switch (action.type) {
    case UsersActions.USERS_SUCCESS:
      return action.users;
    case UsersActions.USERS_ERROR:
      return [];
    default:
      return state;
  }
};

export default users;
