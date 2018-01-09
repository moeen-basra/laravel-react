// auth action types
export const AUTH_CHECK = 'AUTH_CHECK'
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_REFRESH_TOKEN = 'AUTH_REFRESH_TOKEN'
export const AUTH_RESET_PASSWORD = 'AUTH_RESET_PASSWORD'
export const AUTH_USER = 'AUTH_USER'

// user action types
export const USER_UPDATE = 'USER_UPDATE'
export const USER_UNSET = 'USER_UNSET'

// article action types
export const ARTICLE_LIST = 'ARTICLE_LIST'
export const ARTICLE_ADD = 'ARTICLE_ADD'
export const ARTICLE_UPDATE = 'ARTICLE_UPDATE'
export const ARTICLE_REMOVE = 'ARTICLE_REMOVE'

export default {
  AUTH_CHECK,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REFRESH_TOKEN,
  AUTH_RESET_PASSWORD,
  AUTH_USER,
  
  USER_UPDATE,
  USER_UNSET,
  
  ARTICLE_LIST,
  ARTICLE_ADD,
  ARTICLE_UPDATE,
  ARTICLE_REMOVE,
}
