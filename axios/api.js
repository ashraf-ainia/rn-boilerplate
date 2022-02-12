import axios from 'axios';

import { API_URL } from '../config/app';

const api = axios.create({
  timeout: 30000,
  responseType: 'json',
  baseURL: API_URL
});

api.interceptors.request.use(
  config => config,
  error => {
    __DEV && console.log('api request error: ', error, error.response);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,
  error => {
    console.log('api response error: ', error, error.response);
    return Promise.reject(error);
  },
);

export default api;
