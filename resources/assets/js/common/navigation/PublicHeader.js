// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Collapse } from 'reactstrap'
import NavItem from './NavItem'

// define component name
const displayName = 'PublicHeader'

// validate properties
const propTypes = {
  showNavigation: PropTypes.bool.isRequired,
}

// initiate comppnent
const PublicHeader = ({ showNavigation }) => (
  <Collapse className="navbar-collapse navbar-dark" isOpen={showNavigation}>
    <ul className="navbar-nav mr-auto">
      <NavItem path="/">Home</NavItem>
    </ul>
    <ul className="navbar-nav">
      <NavItem path="/login">Login</NavItem>
      <NavItem path="/register">Register</NavItem>
    </ul>
  </Collapse>)

// bind properties
PublicHeader.displayName = displayName
PublicHeader.propTypes = propTypes

// export component
export default PublicHeader
