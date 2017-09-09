import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import { articleActions } from '../actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function articleAddRequest(params) {
  return dispatch => {
    Http.post('/articles', transformRequest(params))
      .then((res) => {
        dispatch(articleActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle error
        console.error(err.response)
      })
  }
}

export function articleUpdateRequest(params) {
  return dispatch => {
    Http.put(`articles/${params.id}`, transformRequest(params))
      .then((res) => {
        dispatch(articleActions.update(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle error
        console.error(err.response)
      })
  }
}

export function articleRemoveRequest(id) {
  return dispatch => {
    Http.delete(`articles/${id}`)
      .then(() => {
        dispatch(articleActions.remove(id))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function articleListRequest(pageNumber = 1) {
  return dispatch => {
    let url = 'articles'
    if (pageNumber > 1) {
      url = url + `?page=${pageNumber}`
    }
    
    Http.get(url)
      .then((res) => {
        dispatch(articleActions.list(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function articleRequest(id) {
  return dispatch => {
    Http.get(`articles/${id}/edit`)
      .then((res) => {
        dispatch(articleActions.update(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
