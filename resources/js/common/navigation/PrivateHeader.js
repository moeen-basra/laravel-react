// import libs
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import components
import { Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import NavItem from './NavItem'

// define component name
const displayName = 'PrivateHeader'

// validate properties
const propTypes = {
  user: PropTypes.object.isRequired,
  showNavigation: PropTypes.bool.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

// initiate comppnent
const PrivateHeader = ({ user, showNavigation, showDropdown, toggleDropdown, logout }) => (
  <Collapse className="navbar-collapse" isOpen={showNavigation}>
    <ul className="navbar-nav mr-auto">
      <NavItem path="/">Home</NavItem>
      <NavItem path="/articles">Articles</NavItem>
    </ul>
    
    <ul className="navbar-nav">
      <Dropdown isOpen={showDropdown} toggle={toggleDropdown}>
        <DropdownToggle nav caret>
          { user.name }
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-right">
          <Link className='dropdown-item' to={`/users/${user.id}/edit`}>
            <span className="fa fa-user-o" title="logout" aria-hidden="true"/> Profile
          </Link>
          <DropdownItem divider />
          <DropdownItem onClick={e => logout(e)}>
            <span className="fa fa-sign-out" title="logout" aria-hidden="true"/> Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ul>
  </Collapse>)

// bind properties
PrivateHeader.displayName = displayName
PrivateHeader.propTypes = propTypes

// export component
export default PrivateHeader
