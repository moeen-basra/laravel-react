import React, { Component } from "react"
import { IndexLink, Link } from "react-router"

class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            collapsed: true,
        };
    }
    toggleCollapse(){
        const collapsed =!this.state.collapsed;
        this.setState({collapsed});
    }
    render(){
        const { location } = this.props;
        const {collapsed } = this.state;
        const homeClass = location.pathname === '/' ? "active" : "";
        const usersClass = location.pathname.match(/^\/users/) ? "active" : "";
        const articlesClass = location.pathname.match(/^\/articles/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";
        return(
            <div class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <Link to="/" class="navbar-brand">My React App</Link>
                        <button class="navbar-toggle" type="button" onClick={this.toggleCollapse.bind(this)}>
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class={"navbar-collapse " + navClass} id="navbar-main">
                        <ul class="nav navbar-nav">
                            <li class={homeClass}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                            </li>
                            <li class={usersClass}>
                                <Link to="users" onClick={this.toggleCollapse.bind(this)}>Users</Link>
                            </li>
                            <li class={articlesClass}>
                                <Link to="articles" onClick={this.toggleCollapse.bind(this)}>Articles</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation
