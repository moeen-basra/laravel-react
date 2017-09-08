import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authLogout } from '../../store/actions/index'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';
import NavItem from './NavItem'

class PrivateHeader extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  }
  
  constructor() {
    super()
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      collapsed: true,
    }
  }
  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  logout() {
    this.props.logout()
  }
  
  render() {
    return (
      <Navbar color="danger" className="navbar navbar-expand-lg fixed-top navbar-dark bg-danger">
        <Link to="/" className="navbar-brand">My React App</Link>
        <NavbarToggler className="navbar-toggler d-lg-none" onClick={this.toggleNavbar} />
        <Collapse className="navbar-collapse" isOpen={!this.state.collapsed}>
          <Nav navbar>
            <NavItem path="/">Home</NavItem>
            <NavItem path="/articles">Articles</NavItem>
            <NavItem path="/users">Users</NavItem>
          </Nav>
        </Collapse>
        <Nav navbar>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.logout}>Logout</a>
          </li>
        </Nav>
      </Navbar>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(authLogout())
  }
}

export default connect(null, mapDispatchToProps)(PrivateHeader)
