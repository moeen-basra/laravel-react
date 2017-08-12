import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const propTypes = {
  path: PropTypes.string.isRequired,
}

const contextTypes = {
  router: PropTypes.object,
}

const Link = ({ path, children }, { router }) => {
  return <li >
    <NavLink to={path}>
      {children}
    </NavLink>
  </li>
}

Link.propTypes = propTypes
Link.contextTypes = contextTypes

export default Link
