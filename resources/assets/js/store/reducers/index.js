import { combineReducers } from 'redux'

import auth from '../../modules/auth/store/reduer'
import user from './user'
import articles from './articles'

export default combineReducers({ auth, user, articles })
