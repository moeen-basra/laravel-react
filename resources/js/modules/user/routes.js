// import lib
import Loadable from 'react-loadable'

// import components
import LoadingComponent from '../../common/loader/index'

export default [
  {
    path: '/users/:id/edit',
    exact: true,
    auth: true,
    component: Loadable({
      loader: () => import('./pages/edit/index'),
      loading: LoadingComponent,
    }),
  },
]