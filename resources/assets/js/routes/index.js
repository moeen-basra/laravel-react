// import libs
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'

// import components
import PrivateRoute from './Private'
// import PublicRoute from './Public'

import Layout from '../pages/Layout'
import Register from '../pages/register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Users from '../pages/users/Users'
import Articles from '../pages/articles/Articles'
import EditArticle from '../pages/articles/EditArticle'

// const history = createBrowserHistory()

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Layout>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/articles" component={Articles} />
        <PrivateRoute exact path="/articles/:id/edit" component={EditArticle} />
      </Layout>
    </Switch>
  </Router>
)

export default Routes
