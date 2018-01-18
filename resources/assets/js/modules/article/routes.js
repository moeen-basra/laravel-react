// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader'

export default [
  {
    path: '/articles',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/list'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/articles/create',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/add'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/articles/:id/edit',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/edit'),
      loading: LoadingComponent,
    }),
  },
]