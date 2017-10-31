import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Main from '../Main'

const PublicRoutes = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (
    <Main>
      <Component {...props}/>
    </Main>
  )}/>
}

PublicRoutes.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PublicRoutes