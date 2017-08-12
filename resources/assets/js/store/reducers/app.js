import HTTP from '../../utils/Http';
import {
  CHECK,
  LOGIN,
  LOGOUT,
  REFRESH_TOKEN,
  RESET_PASSWORD,
} from '../action-types';

const initialState = {
  isAuthenticated: true,
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch(type) {
    case REFRESH_TOKEN:
    case LOGIN:
      return login(state, payload);
    case CHECK:
      return checkAuth(state);
    case LOGOUT:
      return logout(state);
    case RESET_PASSWORD:
      return resetPassword(state);
    default:
      return state;
  }
};

function login(state, payload) {
  state.isAuthenticated = true;
  localStorage.setItem('access_token', payload);
  HTTP.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
  return state;
}

function checkAuth(state) {
  state.isAuthenticated = !!localStorage.getItem('access_token');
  if (state.isAuthenticated) {
    HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
  }
  return state;
}

function logout(state) {
  localStorage.removeItem('access_token');
  state.isAuthenticated = false;
  return state;
}

function resetPassword(state) {
  state.resetPassword = true;
  return state;
}

export const getAuth = state => state.app.isAuthenticated;

export default reducer;
