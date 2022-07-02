import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'ResetPasswordForm'
const propTypes = {
  password: PropTypes.string,
  password_confirmation: PropTypes.string,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const Form = ({ password, password_confirmation, errors, handleChange, handleSubmit }) => (
  <form className="form" role="form" onSubmit={handleSubmit} noValidate>
    <h2 className="card-title">Reset Password</h2>
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
      <label htmlFor="password_confirmation" className="sr-only">Confirm Password</label>
      <input type="password"
             className={`form-control form-control-lg rounded-0 ${errors.has('password_confirmation') && 'is-invalid'}`}
             id="password_confirmation"
             name="password_confirmation"
             placeholder="Confirm Password"
             value={password_confirmation || ''}
             onChange={e => handleChange(e.target.name, e.target.value)}
             required/>
      {errors.has('password_confirmation') && <div className="invalid-feedback">{errors.first('password_confirmation')}</div>}
    </div>
    <button className="btn btn-lg btn-primary btn-block"
            type="submit"
            disabled={errors.any()}>Reset</button>
  </form>
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
