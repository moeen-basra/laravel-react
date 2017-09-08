import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'RegisterFrom'

const propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password_confirmation: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ name, email, password, password_confirmation, onChange, onSubmit }) => {
  return (<form className="form-signin" onSubmit={onSubmit}>
    <h2 className="form-signin-heading">Signup</h2>
    <label htmlFor="name" className="sr-only">Name</label>
    <input id="name"
           type="text"
           className="form-control"
           name="name"
           placeholder="Full Name"
           value={name}
           onChange={e => onChange(e.target.name, e.target.value)}
           required
           autoFocus />
    <label htmlFor="email" className="sr-only">E-Mail Address</label>
    <input id="email"
           type="email"
           className="form-control"
           name="email"
           placeholder="Email address"
           value={email}
           onChange={e => onChange(e.target.name, e.target.value)}
           required />
    <label htmlFor="password" className="sr-only">Password</label>
    <input id="password"
           type="password"
           className="form-control"
           name="password"
           placeholder="Password"
           value={password}
           onChange={e => onChange(e.target.name, e.target.value)}
           required />
    <label htmlFor="password_confirmation" className="sr-only">Confirm Password</label>
    <input id="password_confirmation"
           type="password"
           className="form-control"
           name="password_confirmation"
           placeholder="Confirmed Password"
           value={password_confirmation}
           onChange={e => onChange(e.target.name, e.target.value)}
           required />
    <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Sign up</button>
    <Link to="/login" className="btn btn-link">Back to Login</Link>
  </form>)
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
