// import lib
import { lazy } from 'react'

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/blog',
    exact: true,
    component: lazy(() => import('./pages/blog/list')),
  },
  {
    path: '/blog/:slug',
    exact: true,
    component: lazy(() => import('./pages/blog/details')),
  },
]

export default routes
