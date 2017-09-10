import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import { userActions } from '../actions'

export function fetchUser() {
  return dispatch => {
    return Http.get('user')
      .then(res => {
        const data = Transformer.fetch(res.data)
        dispatch(userActions.userUpdate(data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function userUpdateRequest(param) {
  return dispatch => {
    const data = Transformer.send(param)
    Http.patch(`/users/${data.id}`, data)
      .then((res) => {
        dispatch(userActions.userUpdate(Transformer.fetch(res.data)))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
