/* eslint-disable no-console */
import axios from 'axios'
import {store} from '../store'
import { logout } from '../modules/auth/store'
import { forOwn } from 'lodash-es';

const API_URL = (process.env.NODE_ENV === 'test') ? process.env.BASE_URL || (`http://localhost:${process.env.PORT}/`) : `/`;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(logout())
    }
    return Promise.reject(error);
  });

export default axios

export const setHeaders = (headers: Record<string, any>) => {
  forOwn(headers, (value, key) => {
    if (!!value ) {
      axios.defaults.headers[key] = value
    } else {
      delete axios.defaults.headers[key]
    }
  })
}
