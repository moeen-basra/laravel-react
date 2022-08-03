// import libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../modules/auth/service'
import { Dispatch } from '@reduxjs/toolkit'

// import components
import { Link } from 'react-router-dom'
import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'
import { AuthState } from '../../types'
import { User } from '../../modules/user/User'

type Props = {
  isAuthenticated: boolean,
  user?: User,
  dispatch: Dispatch
}

type State = {
  showNavigation: boolean,
  showDropdown: boolean
}

class Navigation extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      showNavigation: false,
      showDropdown: false,
    }
  }

  toggleNavbar = () => {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }

  toggleDropdown = () => {
    this.setState({
      showDropdown: !this.state.showDropdown,
    })
  }

  logout = e => {
    e.preventDefault()

    this.props.dispatch(logout())
  }

  render() {
    return (
      <div className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        <Link to="/" className="navbar-brand">MOEEN.ME</Link>
        <div className="navbar-toggler d-lg-none" onClick={this.toggleNavbar} />
        {
          this.props.isAuthenticated && this.props.user
            ? <PrivateHeader user={this.props.user}
              showNavigation={this.state.showNavigation}
              toggleDropdown={this.toggleDropdown}
              showDropdown={this.state.showDropdown}
              logout={this.logout} />
            : <PublicHeader showNavigation={this.state.showNavigation} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state: AuthState) => {
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)
