import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'LoginForm'
const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  remember: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const renderErrors = (errors) => {
  if (errors.count()) {
    return <div className="alert alert-danger" role="alert">
      {errors.has('email') && <p className="m-0">{errors.first('email')}</p>}
      {errors.has('password') && <p className="m-0">{errors.first('password')}</p>}
    </div>
  }
}

const Form = ({ email, password, remember, errors, handleChange, handleSubmit }) => (
  <form className="form-signin" onSubmit={handleSubmit} noValidate>
    <h2 className="form-signin-heading">Please sign in</h2>
    { renderErrors(errors) }
    <label htmlFor="email" className="sr-only">E-Mail Address</label>
    <input id="email"
           type="email"
           className={`form-control ${errors.has('email') && 'is-invalid'}`}
           name="email"
           placeholder="Email address"
           value={email || ''}
           onChange={e => handleChange(e.target.name, e.target.value)}
           required
           autoFocus />
    <label htmlFor="password" className="sr-only">Password</label>
    <input id="password"
           type="password"
           className={`form-control ${errors.has('password') && 'is-invalid'}`}
           name="password"
           placeholder="Password"
           value={password || ''}
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
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
