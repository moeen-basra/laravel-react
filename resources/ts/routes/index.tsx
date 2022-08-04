import * as Router from 'react-router-dom'

// import components
import appRoutes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'

import { Layout } from '../layout'

export const Routes = () => {
  return <Router.BrowserRouter>
    <Router.Routes>
      <Router.Route path="/" element={<Layout />}>
        {
          appRoutes.map((route, i) => {
            if (route.auth, i) {
              return <PrivateRoute {...route} />
            }
            <PublicRoute {...route} />
          })
        }
      </Router.Route>
    </Router.Routes>
  </Router.BrowserRouter>
}
