import User from '../../models/User'
import { USER_UPDATE , USER_UNSET, AUTH_LOGOUT } from '../action-types'

const initialState = Object.assign({}, new User({}))

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case USER_UPDATE:
      return updateUser(state, payload);
    case AUTH_LOGOUT:
    case USER_UNSET:
      return unsetUser(state);
    default:
      return state
  }
}

function updateUser(state, payload) {
  state = Object.assign({}, state, payload)
  
  return state
}

function unsetUser(state) {
  const user = Object.assign({}, new User({}))
  
  state = Object.assign({}, state, user)
  
  return state
}

export default reducer
