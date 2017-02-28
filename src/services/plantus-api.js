// @flow
/* global MethodType RequestOptions */
import axios from 'axios';

class PlantusAPI {
  apiPath: string
  token: string

  constructor(apiPath: string, token: string) {
    this.apiPath = apiPath;
    this.token = token;

    const self: any = this;
    self.auth = this.auth.bind(this);
    self.getPlants = this.getPlants.bind(this);
  }

  auth(email: string, password: string) {
    return this.makeCall('/auth/token/', 'POST', null, { email, password })
      .then(response => response.token);
  }

  getPlants() {
    return this.makeCall('/plants/', 'GET', null, null, true)
      .then(response => response.results);
  }

  setToken(token: string) {
    this.token = token;
  }

  async makeCall(path: string, method: MethodType = 'GET', params: ?{} = null, data: ?{} = null, auth: bool = false) {
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

export default new PlantusAPI(process.env.API_PATH ? process.env.API_PATH : 'http://localhost:3000/api', '');
