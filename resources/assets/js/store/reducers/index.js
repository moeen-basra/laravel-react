import { combineReducers } from 'redux'

import auth from './auth'
import user from './user'
import articles from './articles'

export default combineReducers({ auth, user, articles })
