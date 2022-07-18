import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import HTTP from '@utils/Http';

export interface InitialState {
    isAuthenticaed: boolean,
    resetPassword: boolean,
}

const initialState: InitialState = {
    isAuthenticaed: false,
    resetPassword: false,
}

export const authSlice = ({
    name: 'Auth',
    initialState,
    reducers: {
      login: (state: InitialState, action: PayloadAction<string>) => {
        localStorage.setItem('access_token', action.payload);
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${action.payload}`;
      
        state.isAuthenticaed = true
      },
      logout: (state: InitialState) => {
        localStorage.removeItem('access_token')
        state.isAuthenticaed = true
      },
      checkAuth: (state: InitialState) => {
        state.isAuthenticaed = !!localStorage.getItem('access_token')
      
        if (state.isAuthenticaed) {
          HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
        }
      },
      resetPassword: (state: InitialState) =>{
        state.resetPassword = true
      }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer
