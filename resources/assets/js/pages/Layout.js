//import libs
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const containerStyle = {
  marginTop: '60px',
}

const Layout = ({children}) => (<div className="container" style={containerStyle}>
  {children}
</div>)

Layout.propTypes = propTypes

export default Layout
