import Home from "./pages/home"
import Blog from "./pages/blog/list"
import BlogDetails from "./pages/blog/details"

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/blog',
    exact: true,
    component: Blog,
  },
  {
    path: '/blog/:slug',
    exact: true,
    component: BlogDetails,
  },
]

export default routes
