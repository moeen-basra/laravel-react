import _ from 'lodash'
import {
  ARTICLE_ADD,
  ARTICLE_UPDATE,
  ARTICLE_REMOVE,
  ARTICLE_LIST,
} from '../action-types'

const initialState = []

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case ARTICLE_ADD:
      return add(state, payload);
    case ARTICLE_UPDATE:
      return update(state, payload)
    case ARTICLE_REMOVE:
      return remove(state, payload)
    case ARTICLE_LIST:
      return list(state, payload)
    default:
      return state
  }
}

function add(state, payload) {
  state = [...state, payload]
  return state
}

function update(state, payload) {
  const index = _.findIndex(state, { id: payload.id })
  
  state = state.splice(index, 1, payload)
  return state
}

function remove(state, id) {
  const index = _.findIndex(state, { id })
  
  state = state.splice(index, 1)
  return state
}

function list(state, payload) {
  state = [...payload]
  
  return state
}

export default reducer
