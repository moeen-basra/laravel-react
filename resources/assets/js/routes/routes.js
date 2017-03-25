// import libs
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from '../pages/Layout';
import Register from '../pages/register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Users from '../pages/users/Users'
import Articles from '../pages/articles/Articles'
import EditArticle from '../pages/articles/EditArticle';

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Home }/>
            <Route path="/users" component={ Users }/>
            <Route path="/articles" component={ Articles }/>
            <Route path="/articles/:id/edit" component={ EditArticle }/>
            <Route path="/register" component={ Register }/>
            <Route path="/login" component={ Login }/>
        </Route>
    </Router>
)

export default Routes
