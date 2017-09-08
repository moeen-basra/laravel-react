//import libs
import React from 'react'
import PropTypes from 'prop-types'
import Navigation from './includes/navigation'

const propTypes = {
  children: PropTypes.node.isRequired,
}

const containerStyle = {
  marginTop: '60px',
}

const Main = ({children}) => (<div className="container" style={containerStyle}>
  <Navigation/>
  {children}
</div>)

Main.propTypes = propTypes

export default Main
