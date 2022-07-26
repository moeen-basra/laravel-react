import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import HTTP, { setHeaders } from '../../..//utils/Http';
import { AuthObject, AuthState } from "../../../types";

const initialState: AuthState = {
    isAuthenticated: false,
    isInitialised: false,
    // resetPassword: false,
    auth: null,
    user: null
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
      login: (state: AuthState, action: PayloadAction<AuthObject>) => {
        localStorage.setItem('auth', JSON.stringify(action.payload));
        setHeaders({
          Authorization: `${action.payload.tokenType} ${action.payload.accessToken}`
        })
      
        state.isAuthenticated = true
        state.auth = action.payload
      },
      logout: (state: AuthState) => {
        localStorage.removeItem('auth')
        state.isAuthenticated = true
      },
      checkAuth: (state: AuthState) => {
        const auth = localStorage.getItem('auth')

        if (!!auth) {
          state.isAuthenticated = true
          state.auth = JSON.parse(auth)
          setHeaders({
            Authorization: state.auth?.accessToken
          })
        }
      },
    }
})

// Action creators are generated for each case reducer function
export const { login, logout, checkAuth } = authSlice.actions

export default authSlice.reducer
