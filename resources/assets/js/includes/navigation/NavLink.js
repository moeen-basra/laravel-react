import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.any,
}

const contextTypes = {
  router: PropTypes.object,
}

const Link = ({ path, children }, { router }) => {
  const className = path === router.route.location.pathname ? 'active' : ''
  return <li className={`nav-item ${className}`}>
    <NavLink to={path} className="nav-link">
      {children}
    </NavLink>
  </li>
}

Link.propTypes = propTypes
Link.contextTypes = contextTypes

export default Link
