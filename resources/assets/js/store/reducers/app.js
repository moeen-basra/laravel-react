import HTTP from '../../utils/Http';
import {
  AUTH_CHECK,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REFRESH_TOKEN,
  AUTH_RESET_PASSWORD,
} from '../action-types';

const initialState = {
  isAuthenticated: true,
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch(type) {
    case AUTH_REFRESH_TOKEN:
    case AUTH_LOGIN:
      return login(state, payload);
    case AUTH_CHECK:
      return checkAuth(state);
    case AUTH_LOGOUT:
      return logout(state);
    case AUTH_RESET_PASSWORD:
      return resetPassword(state);
    default:
      return state;
  }
};

function login(state, payload) {
  localStorage.setItem('access_token', payload);
  HTTP.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
  
  state = Object.assign({}, state, { isAuthenticated: true })
  
  return state
}

function checkAuth(state) {
  state = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('access_token')
  })
  
  if (state.isAuthenticated) {
    HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
  }
  
  return state;
}

function logout(state) {
  localStorage.removeItem('access_token')
  
  state = Object.assign({}, state, {
    isAuthenticated: false
  })
  
  return state;
}

function resetPassword(state) {
  state.resetPassword = true;
  return state;
}

export const getAuth = state => state.app.isAuthenticated;

export default reducer;
