/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import {
  AUTH_CHECK,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REFRESH_TOKEN,
  AUTH_RESET_PASSWORD,
  AUTH_USER,
} from './action-types';


export function authCheck() {
  return {
    type: AUTH_CHECK,
  }
}

export function authLogin(payload) {
  return {
    type: AUTH_LOGIN,
    payload,
  };
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT,
  }
}

export function authRefreshToken(payload) {
  return {
    type: AUTH_REFRESH_TOKEN,
    payload
  }
}

export function authResetPassword() {
  return {
    type: AUTH_RESET_PASSWORD,
  }
}

export function authUser(payload) {
  return {
    type: AUTH_USER,
    payload
  }
}
