import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const PublicRoutes = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {
    return <Suspense fallback={<div>Loading...</div>}>
      <Component {...props}/>
    </Suspense>
  }}/>
}

PublicRoutes.propTypes = {
  // component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default PublicRoutes
