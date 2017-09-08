import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'LoginForm'
const propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  remember: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const LoginForm = ({ email, password, remember, handleChange, handleSubmit }) => (
  <div className="container">
    <form className="form-signin" onSubmit={handleSubmit}>
      <h2 className="form-signin-heading">Please sign in</h2>
      <label htmlFor="email" className="sr-only">E-Mail Address</label>
      <input id="email"
             type="email"
             className="form-control"
             name="email"
             placeholder="Email address"
             value={email}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required
             autoFocus />
      <label htmlFor="password" className="sr-only">Password</label>
      <input id="password"
             type="password"
             className="form-control"
             name="password"
             placeholder="Password"
             value={password}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required />
      <div className="checkbox mt-3">
        <label>
          <input type="checkbox"
                 name="remember"
                 onChange={e => handleChange(e.target.name, !remember)} /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p>Not a member? <Link to='/register'>Signup here</Link></p>
    </form>
  </div>
)

LoginForm.displayName = displayName
LoginForm.propTyeps = propTypes

export default LoginForm
