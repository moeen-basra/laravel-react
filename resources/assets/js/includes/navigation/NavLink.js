import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
    path: PropTypes.string.isRequired,
}

const contextTypes = {
    router: PropTypes.object,
}

const NavLink = ({ path, children }, { router }) => {
    let isActive = router.isActive(path, true),
        className = isActive ? "active" : "";
    return <li className={className}>
        <Link to={path}>
            {children}
        </Link>
    </li>
}

NavLink.propTypes = propTypes
NavLink.contextTypes = contextTypes

export default NavLink
