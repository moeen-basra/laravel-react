import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import HTTP from '../../../utils/Http';
import { User } from "../User";

export interface InitialState {
  user?: User,
}

const initialState: InitialState = {
  user: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state: InitialState, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    unsetUser: (state: InitialState) => {
      state.user = undefined
    },
    authUser: (state: InitialState, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { updateUser, unsetUser, authUser } = authSlice.actions

export default authSlice.reducer
