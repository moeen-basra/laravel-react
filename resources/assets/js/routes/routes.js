// import libs
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import createBrowserHistory from 'history/createBrowserHistory'

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Articles from "../pages/Articles";

// const history = createBrowserHistory()

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Home }/>
            <Route path="/users" component={ Users }/>
            <Route path="/articles" component={ Articles }/>
        </Route>
    </Router>
)

export default Routes
