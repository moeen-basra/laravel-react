import Register from '../pages/register'
import Login from '../pages/login'
import EditUser from '../pages/users/edit'
import Articles from '../pages/articles/list'
import AddArticle from '../pages/articles/add'
import EditArticle from '../pages/articles/edit'

// import modular routes
import webRoutes from "../modules/web/routes"

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
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
]

export default [...webRoutes, ...routes]
