import jwtDecode from 'jwt-decode'
import { isEmpty } from 'lodash-es'
import React, { createContext, ReducerAction, useEffect, useReducer } from 'react'
// import Loader from 'src/components/Loader/Loader'
import Http, { setHeaders } from '../utils/Http'
import * as authActions from '../modules/auth/service'
import { AuthObject, AuthState } from '../types'

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialised: false,
  auth: null,
  user: null,
}

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false
  }

  const decoded = jwtDecode(accessToken) as any
  const currentTime = Date.now() / 1000

  return decoded.exp > currentTime
}

const setSession = (auth?: AuthObject) => {
  if (auth && !isEmpty(auth)) {
    localStorage.setItem('auth', JSON.stringify(auth))
    setHeaders({
      Authorization: `${auth?.tokenType} ${auth?.accessToken}`,
    })
  } else {
    localStorage.removeItem('auth')
    setHeaders({
      Authorization: false,
    })
  }
}

type Action = {
  type: string,
  payload?: any
}

const reducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case 'INITIALISE': {
      const { isAuthenticated, auth } = action.payload
      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        auth,
      }
    }
    case 'REGISTER':
    case 'LOGIN': {
      const auth = action.payload

      return {
        ...state,
        isAuthenticated: true,
        auth,
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        auth: null,
        user: null,
      }
    }
    case 'USER_UPDATE': {
      const { user } = action.payload

      return {
        ...state,
        user,
      }
    }
    default: {
      return { ...state }
    }
  }
}

const AuthContext = createContext({
  ...initialAuthState,
  method: 'JWT',
  login: (params: any) => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: (params: any) => Promise.resolve(),
  me: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState)

  const login = async (params) => {
    try {
      const auth = await authActions.login(params)

      setSession(auth)
      dispatch({
        type: 'LOGIN',
        payload: {
          auth,
        },
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const logout = async () => {
    try {
      await logout()

      setSession()
      dispatch({ type: 'LOGOUT' })
    } catch (error) {
      console.error(error)
    }
  }

  const register = async (params) => {
    try {
      return register(params)
      // const auth = await AuthService.register(params)
      //   .then(res => res.data)
      //
      // setSession(auth)
      //
      // dispatch({
      //   type: 'REGISTER',
      //   payload: {
      //     auth,
      //   },
      // })
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const me = async () => {
    try {
      const user = await me()

      dispatch({
        type: 'USER_UPDATE',
        payload: {
          user,
        },
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  useEffect(() => {
    const initialise = async () => {
      let payload: AuthState = {
        ...initialAuthState
      }

      try {
        let item = localStorage.getItem('auth')

        if (!!item) {
          const auth = JSON.parse(item) as AuthObject

          if (isValidToken(auth?.accessToken)) {
            setSession(auth)

            await me()

            payload = {
              ...payload,
              isAuthenticated: true,
              auth,
            }
          } else {
            setSession()
          }
        }
      } catch (error) {
        setSession()
        console.error(error)
      }

      dispatch({
        type: 'INITIALISE',
        payload,
      })
    }

    initialise()
  }, [])

  if (!state.isInitialised) {
    // return <Loader />
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'JWT',
        login,
        logout,
        register,
        me,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext