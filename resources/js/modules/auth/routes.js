// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'


export default [
  {
    path: '/login',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/login/index'),
      loading: LoadingComponent,
    }),
  },
  {
    path: '/register',
    exact: true,
    component: Loadable({
      loader: () => import('./pages/register/index'),
      loading: LoadingComponent,
    }),
  },
]