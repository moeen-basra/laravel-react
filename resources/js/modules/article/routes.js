// import lib
import { lazy } from 'react'

export default [
  {
    path: '/articles',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list/index')),
  },
  {
    path: '/articles/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add/index')),
  },
  {
    path: '/articles/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit/index')),
  },
]
