//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Http from '../../../utils/Http'


class Page extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      errors: {},
      hasError: false,
      message: null,
    }
    
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChange(name, value) {
    const { user } = this.state
    
    user[name] = value
    
    this.setState({ user })
  }
  
  onSubmit(e) {
    e.preventDefault()
    
    this.resetErrors()
    this.resetMessage()
    
    const { user } = this.state
  
    Http.post('/auth/register', user)
      .then(res => {
        if (res.status === 201) {
          this.setState({ message: 'Your account has been created successfully' })
          this.props.history.push('/login')
        } else {
          return res
        }
      })
      .catch(err => {
        if (err.response.status === 422) {
          const errors = err.response.data
          this.setState({ errors, hasError: true })
        }
      })
  }
  
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }
  
  componentWillUnmount() {
    $('body').removeAttr('style')
  }
  
  render() {
    const { name, email, password, password_confirmation } = this.state
    
    return <form className="form-signin" onSubmit={this.onSubmit}>
      <h2 className="form-signin-heading">Signup</h2>
      <label htmlFor="name" className="sr-only">Name</label>
      <input id="name"
             type="text"
             className="form-control"
             name="name"
             placeholder="Full Name"
             value={name}
             onChange={e => this.onChange(e.target.name, e.target.value)}
             required
             autoFocus />
      <label htmlFor="email" className="sr-only">E-Mail Address</label>
      <input id="email"
             type="email"
             className="form-control"
             name="email"
             placeholder="Email address"
             value={email}
             onChange={e => this.onChange(e.target.name, e.target.value)}
             required />
      <label htmlFor="password" className="sr-only">Password</label>
      <input id="password"
             type="password"
             className="form-control"
             name="password"
             placeholder="Password"
             value={password}
             onChange={e => this.onChange(e.target.name, e.target.value)}
             required />
      <label htmlFor="password_confirmation" className="sr-only">Confirm Password</label>
      <input id="password_confirmation"
             type="password"
             className="form-control"
             name="password_confirmation"
             placeholder="Confirmed Password"
             value={password_confirmation}
             onChange={e => this.onChange(e.target.name, e.target.value)}
             required />
      <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign up</button>
      <Link to="/login" className="btn btn-link">Back to Login</Link>
    </form>
  }
}

export default Page
