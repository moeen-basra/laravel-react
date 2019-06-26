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

const Form = ({ email, password, remember, errors, handleChange, handleSubmit }) => (
  <form className="form" role="form" onSubmit={handleSubmit} noValidate>
    <h2 className="card-title">Please sign in</h2>
    <div className="form-group">
      <label htmlFor="email" className="sr-only">Email</label>
      <input type="text"
             className={`form-control form-control-lg rounded-0 ${errors.has('email') && 'is-invalid'}`}
             name="email"
             id="email"
             placeholder="Email address"
             value={email || ''}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required
             autoFocus/>
      {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
    </div>
    <div className="form-group">
      <label htmlFor="password" className="sr-only">Password</label>
      <input type="password"
             className={`form-control form-control-lg rounded-0 ${errors.has('password') && 'is-invalid'}`}
             id="password"
             name="password"
             placeholder="Password"
             value={password || ''}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required/>
      {errors.has('password') && <div className="invalid-feedback">{errors.first('password')}</div>}
    </div>
    <div>
      <label className="custom-control custom-checkbox">
        <input type="checkbox"
               name="remember"
               className="custom-control-input"
               onChange={e => handleChange(e.target.name, !remember)}/>
        <span className="custom-control-indicator" />
        <span className="custom-control-description small">Remember me on this computer</span>
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={errors.any()}>Sign In</button>
    <p>Not a member? <Link to='/register'>Signup here</Link></p>
  </form>
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
