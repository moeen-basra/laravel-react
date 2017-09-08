import Http from '../../utils/Http'
import { authActions } from '../actions'
import Transformer from '../../utils/Transformer'

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
        const data = Transformer.fetchCollection(res.data)
        dispatch(authActions.authLogin(data.accessToken))
      })
      .catch()
  }
}

export function fetchUser() {
  return dispatch => {
    return Http.get('user')
      .then(res => {
        const data = Transformer.fetchCollection(res.data)
        dispatch(authActions.setUser(data))
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
    return Http.delete('auth/logout')
      .then(() => {
        dispatch(authActions.authLogout())
      })
      .catch(err => {
        console.log(err)
      })
  }
}
