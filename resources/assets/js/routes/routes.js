// import libs
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import history from 'history'

// import components
import Layout from '../pages/Layout'
import Register from '../pages/register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Users from '../pages/users/Users'
import Articles from '../pages/articles/Articles'
import EditArticle from '../pages/articles/EditArticle'

const Routes = (
  <Router history={history}>
    <Layout>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/articles" component={Articles} />
      <Route path="/articles/:id/edit" component={EditArticle} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Layout>
  </Router>
)

export default Routes
