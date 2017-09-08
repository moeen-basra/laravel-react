import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Layout from '../pages/Layout'
import PrivateHeader from '../includes/navigation/PrivateHeader'
import PublicHeader from '../includes/navigation/PublicHeader'

const PublicRoutes = ({ component: Component, isAuthenticated, ...rest }) => {
  return <Route {...rest} render={props => (
    isAuthenticated ? (
      <Layout>
        <PrivateHeader />
        <Component {...props}/>
      </Layout>
    ) : (
      <Layout>
        <PublicHeader />
        <Component {...props}/>
      </Layout>
    )
  )}/>
}

PublicRoutes.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    isAuthenticated: store.app.isAuthenticated,
  };
}

export default connect(mapStateToProps)(PublicRoutes)