import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import NavItem from './NavItem'

class PublicHeader extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    }
  }
  
  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({ collapsed })
  }
  
  render() {
    const navClass = this.state.collapsed ? 'collapse' : ''
    
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link to="/" className="navbar-brand">My React App</Link>
        <button className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.toggleCollapse.bind(this)}>
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className={`navbar-collapse ${navClass}`} id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <NavItem path="/">Home</NavItem>
          </ul>
          <ul className="navbar-nav">
            <NavItem path="/login">Login</NavItem>
            <NavItem path="/register">Register</NavItem>
          </ul>
        </div>
      </nav>
    )
  }
}

export default PublicHeader
