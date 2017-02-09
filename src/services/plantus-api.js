import { getToken } from './auth';

export default class PlantusAPI {
  static auth(email: string, password: string) {
    return PlantusAPI.makeCall('/auth/token/', 'POST', { email, password }, false);
  }

  static makeCall(path: string, method: 'POST'|'GET'|'PUT'|'DELETE'|'PATCH', params: ?{}, auth: bool) {
    const fullpath = `${process.env.API_PATH}${path}`;
    const config = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (params && method !== 'GET') {
      config.body = JSON.stringify(params);
    }

    if (auth) {
      config.headers.Authorization = `JWT ${getToken()}`;
    }

    return fetch(fullpath, config);
  }
}
