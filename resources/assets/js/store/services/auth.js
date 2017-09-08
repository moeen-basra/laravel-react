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
        const data = Transformer.fetch(res.data)
        dispatch(authActions.authLogin(data.accessToken))
      })
      .catch()
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
