import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import HTTP from '@utils/Http';
import { UserInterface } from "../User";

export interface InitialState {
    user?: UserInterface,
}

const initialState: InitialState = {
    user: undefined,
}

export const authSlice = ({
    name: 'Auth',
    initialState,
    reducers: {
      updateUser: (state: InitialState, action: PayloadAction<UserInterface>) => {
        state.user = action.payload
      },
      unsetUser: (state: InitialState) => {
        state.user = undefined
      },
      authUser: (state: InitialState, action: PayloadAction<UserInterface>) => {
        state.user = action.payload
      },
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer
