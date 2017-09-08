import Http from '../../utils/Http'
import userActions from '../actions'

export function fetch(dispatch) {
  Http.get('user')
    .then(res => {
      console.log(res)
      dispatch(userActions.userAdd(res.data))
    })
    .catch()
}

export default {
  fetch,
}