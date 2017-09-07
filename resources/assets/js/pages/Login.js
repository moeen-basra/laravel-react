//import libs
import React, { Component } from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
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
      remember: false,
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
  
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }
  
  componentWillUnmount() {
    $('body').removeAttr('style')
  }
  
  render() {
    const { email, password, remember } = this.state
    
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />
    }
    
    return <div className="container">
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="email" className="sr-only">E-Mail Address</label>
        <input id="email"
               type="email"
               className="form-control"
               name="email"
               placeholder="Email address"
               value={email}
               onChange={e => this.handleChange(e.target.name, e.target.value)}
               required
               autoFocus />
        <label htmlFor="password" className="sr-only">Password</label>
        <input id="password"
               type="password"
               className="form-control"
               name="password"
               placeholder="Password"
               value={password}
               onChange={e => this.handleChange(e.target.name, e.target.value)}
               required />
        <div className="checkbox mt-3">
          <label>
            <input type="checkbox"
                   name="remember"
                   onChange={e => this.handleChange(e.target.name, !remember)} /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p>Not a member? <Link to='/register'>Signup here</Link></p>
      </form>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.app.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: payload => {
      dispatch(login(payload))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
