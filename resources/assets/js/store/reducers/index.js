import { combineReducers } from 'redux'

import auth from '../../modules/auth/store/reduer'
import user from '../../modules/user/store/reducer'
import articles from './articles'

export default combineReducers({ auth, user, articles })
