"use strict";
// /**
//  * Main store function
//  */
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// // import { createLogger } from 'redux-logger'
// import rootReducer from './reducers'
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
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
const toolkit_1 = require("@reduxjs/toolkit");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {},
});
