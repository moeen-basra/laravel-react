// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../store/services/auth'

// import components
import { Link } from 'react-router-dom'
import { Navbar, NavbarToggler } from 'reactstrap';
import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'

class Navigation extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor() {
    super()
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      showNavigation: false,
    }
  }
  
  toggleNavbar() {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }
  
  logout(e) {
    e.preventDefault()
    
    this.props.dispatch(logout())
  }
  
  render() {
    return (
      <Navbar color="danger" className="navbar navbar-expand-md fixed-top navbar-dark bg-danger">
        <Link to="/" className="navbar-brand">My React App</Link>
        <NavbarToggler className="navbar-toggler d-lg-none" onClick={this.toggleNavbar} />
        {
          this.props.isAuthenticated
            ? <PrivateHeader showNavigation={this.state.showNavigation} logout={this.logout} />
            : <PublicHeader showNavigation={this.state.showNavigation} />
        }
      </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Navigation)
