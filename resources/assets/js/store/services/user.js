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

export function userUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`/users/${params.id}`, Transformer.send(params))
        .then(res => {
          dispatch(userActions.userUpdate(Transformer.fetch(res.data.user)))
          return resolve()
        })
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };
          
          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
  /*return dispatch => {
    const data = Transformer.send(param)
    Http.patch(`/users/${data.id}`, data)
      .then((res) => {
        dispatch(userActions.userUpdate(Transformer.fetch(res.data)))
      })
      .catch((err) => {
        console.log(err)
      })
  }*/
}
