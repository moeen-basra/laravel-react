import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// import components
import appRoutes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'

import {Layout} from '../layout'

export default function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      {
        appRoutes.map((route, i) => {
          if (route.auth, i) {
            return <Route key={`routes-${i}`} path={route.path} element={<PrivateRoute {...route}/>} />
          }
          return <Route key={`routes-${i}`} path={route.path} element={<PublicRoute {...route} />} />
        })
      }
      </Route>
    </Routes>
  </BrowserRouter>
}

// const Routes = () => (
//   <Router>
//     <Layout>
//       <Switch>
//         {routes.map((route, i) => {
//           if (route.auth) {
//             return <PrivateRoute key={i} {...route} />
//           }
//           return <PublicRoute key={i} {...route} />
//         })}
//       </Switch>
//     </Layout>
//   </Router>
// )

