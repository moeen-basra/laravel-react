import Http from '../../utils/Http'
import { authActions } from '../actions'

export function login(credentials) {
  return dispatch => {
    Http.post('auth/login', credentials)
      .then(res => {
        dispatch(authActions.authLogin(res.data))
      })
      .catch()
  }
}

export function logout() {
  return dispatch => {
    dispatch(authActions.authLogout())
  }
}
