import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import NavItem from './NavItem'

class PrivateHeader extends Component {
  constructor() {
    super()
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      collapsed: true,
      dropdownOpen: false
    }
  }
  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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
          <NavItem path="/logout">Logout</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default PrivateHeader
