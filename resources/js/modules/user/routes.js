// import lib
import { lazy } from 'react'

export default [
  {
    path: '/users/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit/index')),
  },
]
