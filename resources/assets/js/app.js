
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from "react"
import { render } from "react-dom"
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'

import { authCheck } from './modules/auth/store/actions'

store.dispatch(authCheck())

render((<Provider store={store}>
    <Routes/>
  </Provider>),
    document.getElementById('app')
)
