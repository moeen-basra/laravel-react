import Http from '../../utils/Http'
import { authActions } from '../actions'

/**
 * login user
 *
 * @param credentials
 * @returns {function(*)}
 */
export function login(credentials) {
  return dispatch => {
    Http.post('auth/login', credentials)
      .then(res => {
        dispatch(authActions.authLogin(res.data.access_token))
      })
      .catch()
  }
}

export function fetchUser() {
  return dispatch => {
    return Http.get('user')
      .then(res => {
        dispatch(authActions.setUser(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

/**
 * logout user
 *
 * @returns {function(*)}
 */
export function logout() {
  return dispatch => {
    dispatch(authActions.authLogout())
  }
}
