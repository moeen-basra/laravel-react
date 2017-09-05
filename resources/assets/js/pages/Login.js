//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Http from '../utils/Http'
import { login } from '../store/actions/index'

class Login extends Component {
  
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loginUser: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      email: '',
      password: '',
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(name, value) {
    this.setState({ [name]: value })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state
  
    Http.post('/auth/login', { email, password })
      .then(res => {
        this.props.loginUser(res.data.access_token)
      })
      .catch(e => {
        console.error(e)
      })
  }
  
  render() {
    const { email, password } = this.state
    
    if (this.props.isAuthenticated) {
      return <Redirect to="/home"/>
    }
    
    return <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div className="panel panel-default">
          <div className="panel-heading">Login</div>
          <div className="panel-body">
            <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
                
                <div className="col-md-6">
                  <input id="email"
                         type="email"
                         className="form-control"
                         name="email"
                         value={email}
                         onChange={e => this.handleChange(e.target.name, e.target.value)}
                         required
                         autoFocus />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="col-md-4 control-label">Password</label>
                
                <div className="col-md-6">
                  <input id="password"
                         type="password"
                         className="form-control"
                         name="password"
                         value={password}
                         onChange={e => this.handleChange(e.target.name, e.target.value)}
                         required />
                
                </div>
              </div>
              
              <div className="form-group">
                <div className="col-md-6 col-md-offset-4">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="remember" /> Remember Me
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <div className="col-md-8 col-md-offset-4">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  
                  <a className="btn btn-link" href="http://127.0.0.1:8000/password/reset">
                    Forgot Your Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.app.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: payload => {
      dispatch(login(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
