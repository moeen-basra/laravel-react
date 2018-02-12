//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import services actions
import { fetchUser } from '../modules/auth/service'

// import components
import PrivateLayout from './Private'
import PublicLayout from './Public'

class Layout extends Component {
  static displayName = 'Layout'
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { isAuthenticated, user } = this.props

    if (isAuthenticated && !user.id) {
      this.props.dispatch(fetchUser())
    }

  }

  render() {
    const { children, ...props } = this.props
    if (this.props.isAuthenticated) {
      return <PrivateLayout {...props}>{children}</PrivateLayout>
    }
    return <PublicLayout {...props}>{children}</PublicLayout>
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps)(Layout))
