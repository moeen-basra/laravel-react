import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'UserFrom'
const propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ user, onChange, onSubmit }) => {
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input type="text"
               id="name"
               name="name"
               className="form-control"
               placeholder="Full Name"
               value={user.name}
               onChange={e => onChange(e.target.name, e.target.value)} />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="email"
               id="email"
               name="email"
               className="form-control"
               placeholder="Email"
               value={user.email}
               onChange={e => onChange(e.target.name, e.target.value)}/>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
      <div className="col-sm-10">
        <input type="text"
               id="phone"
               name="phone"
               className="form-control"
               placeholder="Phone"
               value={user.phone}
               onChange={e => onChange(e.target.name, e.target.value)}/>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="about" className="col-sm-2 col-form-label">About</label>
      <div className="col-sm-10">
        <textarea id="about"
                  name="about"
                  className="form-control"
                  rows="3"
                  placeholder="About"
                  value={user.about}
                  onChange={e => onChange(e.target.name, e.target.value)} />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10 ml-auto">
        <button type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
