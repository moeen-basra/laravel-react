import EditUser from '../pages/users/edit'
import Articles from '../pages/articles/list'
import AddArticle from '../pages/articles/add'
import EditArticle from '../pages/articles/edit'

// import modular routes
import webRoutes from "../modules/web/routes"
import authRoutes from "../modules/auth/routes"

const routes = [
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

export default [...webRoutes, ...authRoutes, ...routes]
