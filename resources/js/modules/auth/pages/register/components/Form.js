import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'RegisterFrom'

const propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const Form = ({ name, email, password, passwordConfirmation, errors, handleChange, handleSubmit }) => {
  return (<form className="form" role="form" onSubmit={handleSubmit} noValidate>
    <h2 className="card-title">Sign up</h2>
    <div className="form-group">
      <label htmlFor="name" className="sr-only">Email</label>
      <input type="text"
             className={`form-control form-control-lg rounded-0 ${errors.has('name') && 'is-invalid'}`}
             name="name"
             id="name"
             placeholder="Full Name"
             value={name || ''}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required
             autoFocus/>
      {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
    </div>
    <div className="form-group">
      <label htmlFor="email" className="sr-only">Email</label>
      <input type="email"
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
    <div className="form-group">
      <label htmlFor="passwordConfirmation" className="sr-only">Confirm Password</label>
      <input type="password"
             className={`form-control form-control-lg rounded-0 ${errors.has('passwordConfirmation') && 'is-invalid'}`}
             id="passwordConfirmation"
             name="passwordConfirmation"
             placeholder="Confirm Password"
             value={passwordConfirmation || ''}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required/>
      {errors.has('passwordConfirmation') && <div className="invalid-feedback">{errors.first('passwordConfirmation')}</div>}
    </div>
    <button className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={errors.any()}>Sign Up</button>
    <p>Back to<Link to="/login" className="btn btn-link">Login</Link></p>
  </form>)
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
