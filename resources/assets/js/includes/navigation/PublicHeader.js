import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import NavLink from './NavLink'

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
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">My React App</Link>
            <button className="navbar-toggle" type="button" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          
          <div className={`navbar-collapse ${navClass}`} id="app-navbar-collapse">
            <ul className="nav navbar-nav">
              <NavLink path="/">Home</NavLink>
            </ul>
            
            <ul className="nav navbar-nav navbar-right">
              
              <NavLink path="/login">Login</NavLink>
              <NavLink path="/register">Register</NavLink>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PublicHeader
