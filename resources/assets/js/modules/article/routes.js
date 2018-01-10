import Articles from "./pages/list"
import EditArticle from "./pages/edit"
import AddArticle from "./pages/add"

export default [
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