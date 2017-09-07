import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import NavLink from './NavLink'

class PrivateHeader extends Component {
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
            <NavLink path="/">Home</NavLink>
            <NavLink path="/articles">Articles</NavLink>
            <NavLink path="/users">Users</NavLink>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Moeen
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/logout" className="dropdown-item">Logout</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      /*<div className="navbar navbar-default navbar-fixed-top">
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
              <NavLink path="/articles">Articles</NavLink>
              <NavLink path="/users">Users</NavLink>
            </ul>
            
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                   aria-expanded="false">
                  Moeen <span className="caret" />
                </a>
                
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="logout">Logout</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>*/
    )
  }
}

export default PrivateHeader
