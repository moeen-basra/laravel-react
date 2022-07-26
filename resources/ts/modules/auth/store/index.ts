import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import HTTP from '../../..//utils/Http';
import { AuthState } from "../../../types";

const initialState: AuthState = {
    isAuthenticated: false,
    resetPassword: false,
}

export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
      login: (state: AuthState, action: PayloadAction<string>) => {
        localStorage.setItem('access_token', action.payload);
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
      
        state.isAuthenticated = true
      },
      logout: (state: AuthState) => {
        localStorage.removeItem('access_token')
        state.isAuthenticated = true
      },
      checkAuth: (state: AuthState) => {
        state.isAuthenticated = !!localStorage.getItem('access_token')
      
        if (state.isAuthenticated) {
          HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
        }
      },
      resetPassword: (state: AuthState) =>{
        state.resetPassword = true
      }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout, checkAuth, resetPassword } = authSlice.actions

export default authSlice.reducer
