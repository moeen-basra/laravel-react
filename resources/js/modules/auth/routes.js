// import lib
import { lazy } from 'react'

export default [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('./pages/login')),
  },
  {
    path: '/register',
    exact: true,
    component: lazy(() => import('./pages/register')),
  },
  {
    path: '/forget-password',
    exact: true,
    component: lazy(() => import('./pages/password')),
  },
  {
    path: '/password/reset',
    exact: true,
    component: lazy(() => import('./pages/reset-password')),
  },
]
