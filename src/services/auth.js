// @flow

import PlantusAPI from './plantus-api';

export function isAuthenticated() {
  return localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined;
}

export function getToken() {
  return localStorage.getItem('token');
}

export function logIn(email: string, password: string) {
  return PlantusAPI.auth(email, password)
  .then((response) => {
    localStorage.setItem('token', response.token);
  });
}

export function logOut() {
  localStorage.setItem('token', '');
}
