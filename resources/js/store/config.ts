// /**
//  * Main store function
//  */
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// // import { createLogger } from 'redux-logger'
// import rootReducer from './reducers'

// export default function (initialState = {}) {
//   // Middleware and store enhancers
//   const enhancers = [
//     applyMiddleware(thunk),
//   ]
  
//   if (process.env.NODE_ENV !== 'production') {
//     // enhancers.push(applyMiddleware(createLogger()))
//     window.__REDUX_DEVTOOLS_EXTENSION__ && enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
//   }
  
//   const store = configureStore(rootReducer, initialState, compose(...enhancers))
  
//   // For hot reloading reducers
//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//       const nextReducer = require('./reducers').default // eslint-disable-line global-require
//       store.replaceReducer(nextReducer)
//     })
//   }
  
//   return store
// }

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch