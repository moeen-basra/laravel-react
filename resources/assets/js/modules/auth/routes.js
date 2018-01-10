import Register from "./pages/register"
import Login from "./pages/login"

export default [
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
]