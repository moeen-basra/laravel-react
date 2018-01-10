import Edit from "./pages/edit"

export default [
  {
    path: '/users/:id/edit',
    exact: true,
    auth: true,
    component: Edit,
  },
]