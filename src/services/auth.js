// @flow

import PlantusAPI from './plantus-api';

export function isAuthenticated() {
  return localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined;
}

export function getToken() {
  return localStorage.getItem('token');
}

export function logIn(email: string, password: string) {
  PlantusAPI.auth(email, password).then((response) => {
    response.json().then((data) => {
      localStorage.setItem('token', data.token);
      console.log(data.token);
    });
  }).catch((error) => {
    console.log(error);
  });
}

export function logOut() {
  localStorage.setItem('token', '');
}
