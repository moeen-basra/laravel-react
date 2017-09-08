// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Collapse } from 'reactstrap'
import NavItem from './NavItem'

// define component name
const displayName = 'PrivateHeader'

// validate properties
const propTypes = {
  showNavigation: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
}

// initiate comppnent
const PrivateHeader = ({ showNavigation, logout }) => (
  <Collapse className="navbar-collapse" isOpen={showNavigation}>
    <ul className="navbar-nav mr-auto">
      <NavItem path="/">Home</NavItem>
      <NavItem path="/articles">Articles</NavItem>
      <NavItem path="/users">Users</NavItem>
    </ul>
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={e => logout(e)}>Logout</a>
      </li>
    </ul>
  </Collapse>)

// bind properties
PrivateHeader.displayName = displayName
PrivateHeader.propTypes = propTypes

// export component
export default PrivateHeader
