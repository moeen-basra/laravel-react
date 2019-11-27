// import lib
import { lazy } from 'react'

export default [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('./pages/login/index')),
  },
  {
    path: '/register',
    exact: true,
    component: lazy(() => import('./pages/register/index')),
  },
]
