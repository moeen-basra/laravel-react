import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../modules/auth/store'
import userSlice from '../modules/user/store'
import articleSlice from '../modules/article/store'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    articles: articleSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch