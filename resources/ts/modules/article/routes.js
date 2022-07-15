// import lib
import { lazy } from 'react'

export default [
  {
    path: '/articles',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list')),
  },
  {
    path: '/articles/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add')),
  },
  {
    path: '/articles/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit')),
  },
]
