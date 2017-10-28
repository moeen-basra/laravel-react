// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { userUpdate } from '../../../store/actions/user'
import { userUpdateRequest } from '../../../store/services/user'
import { Validator } from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'UserPage'
  static propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new Validator({
      'name': 'required|min:3',
      'email': 'required|email',
      'phone': 'min:8|numeric',
      'about': 'min:10|max:1024',
    })
    
    this.state = {
      errors: this.validator.errors
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(name, value) {
    const article = { ...this.props.user, [name]: value}
    const { errors } = this.validator
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.props.dispatch(userUpdate(article))
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const user = this.props.user
    const { errors } = this.validator
    
    this.validator.validateAll(user)
      .then((success) => {
        if (success) {
          this.submit(user)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(user) {
    this.props.dispatch(userUpdateRequest(user))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
        
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
        
        this.setState({ errors })
      })
  }
  
  /*handleChange(name, value) {
    const payload = { [name]: value }
    this.props.dispatch(userUpdate(payload))
  }
  
  handleSubmit(e) {
    e.preventDefault()
    
    const payload = Object.assign({}, this.props.user)
    
    this.props.dispatch(userUpdateRequest(payload))
  }*/
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Profile</h1>
  
      <section className="row">
        <div className="col-12 col-md-9 col-sm-12">
          <Form user={this.props.user}
                errors={this.state.errors}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}/>
        </div>
      </section>
    </main>
  }
}

export default Page
