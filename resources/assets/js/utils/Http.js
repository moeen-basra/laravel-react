/* eslint-disable no-console */
import axios from 'axios'
import store from '../store'
import { authLogout } from '../modules/auth/store/actions'

const version = 'v1'
const API_URL = (process.env.NODE_ENV === 'test') ? process.env.BASE_URL || (`http://localhost:${process.env.PORT}/api/${version}/`) : `/api/${version}`;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(authLogout())
    }
    return Promise.reject(error);
  });

export default axios
