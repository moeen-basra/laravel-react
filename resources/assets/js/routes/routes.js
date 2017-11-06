import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/home'
import EditUser from '../pages/users/edit'
import Articles from '../pages/articles/list'
import AddArticle from '../pages/articles/add'
import EditArticle from '../pages/articles/edit'
import ShowArticle from '../pages/articles/show'

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: Register,
  },
  {
    path: '/users/:id/edit',
    exact: true,
    auth: true,
    component: EditUser,
  },
  {
    path: '/articles',
    exact: true,
    auth: true,
    component: Articles,
  },
  {
    path: '/articles/create',
    exact: true,
    auth: true,
    component: AddArticle,
  },
  {
    path: '/articles/:id/edit',
    exact: true,
    auth: true,
    component: EditArticle,
  },
  {
    path: '/articles/:slug',
    exact: true,
    auth: false,
    component: ShowArticle,
  },
]

export default routes
