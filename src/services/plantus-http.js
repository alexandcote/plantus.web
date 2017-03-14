// @flow
/* global MethodType RequestOptions */
import axios from 'axios';

class PlantusHTTP {
  apiPath: string
  token: string

  constructor(apiPath: string, token: string) {
    this.apiPath = apiPath;
    this.token = token;
  }

  setToken(token: string) {
    this.token = token;
  }

  async fetch(path: string, method: MethodType = 'GET', auth: bool = true, data: ?{} = null, params: ?{} = null) {
    const fullpath = this.apiPath + path;

    const headers = {};
    headers.Accept = 'application/json';
    headers['Content-Type'] = 'application/json';
    if (auth) {
      headers.Authorization = `JWT ${this.token}`;
    }

    return axios(fullpath, { method, params, data, headers }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      return Promise.reject(response);
    });
  }
}

export default new PlantusHTTP(process.env.API_PATH ? process.env.API_PATH : 'http://localhost:3000/api', '');
