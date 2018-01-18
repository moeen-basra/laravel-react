// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/home'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/blog',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/blog/list'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/blog/:slug',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/blog/details'),
      loading: LoadingComponent,
    }),
  },
]

export default routes
