/* eslint-disable react/prop-types */
 // import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import { Redirect } from 'react-router-dom'
import { resetPassword } from '../../service'
import { Validator } from 'ree-validate'
// import components
import Form from './components/Form'

// initialize component
class Page extends Component {
  // set name of the component
  static displayName = 'ResetPasswordPage'

  // validate props
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.query = new URLSearchParams(this.props.location.search);

    this.validator = new Validator({
      password: 'required|min:6',
      password_confirmation: 'required',
    })

    // set the state of the app
    this.state = {
      credentials: {
        email: this.query.get('email'),
        token: this.query.get('token'),
        password: '',
        password_confirmation: '',
      },
      updated: false,
      errorMessage: null,
      errors: this.validator.errors
    }
  }

  // after mounting the component add a style to the body
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }

  // remove body style before component leaves dom
  componentWillUnmount() {
    $('body').removeAttr('style')
  }

  // event to handle input change
  handleChange = (name, value) => {
    const { errors } = this.validator

    this.setState({ credentials: { ...this.state.credentials, [name]: value } })

    errors.remove(name)

    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })

    if(this.state.password != this.state.password_confirmation)
      errors.add('password_confirmation', 'The password confirmation does not match.');
    else
      errors.remove('password_confirmation');

    this.setState({ errors })
  }

  // event to handle form submit
  handleSubmit = e => {
    e.preventDefault()
    const { credentials } = this.state
    const { errors } = this.validator

    this.validator.validateAll(credentials)
      .then((success) => {
        if (success) {
          this.submit(credentials)
        } else {
          this.setState({ errors })
        }
      })
  }

  submit(data) {
    this.setState({errorMessage: null})
    resetPassword(data).then(() => {
      this.setState({updated: true});
    }).catch((err) => {
      this.setState({errorMessage: err.response.data.message})
    })
  }

  // render component
  render() {

    // check if user is authenticated then redirect him to home page
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }

    if(!this.query.get('token') || !this.query.get('email') || this.state.updated) {
      return <Redirect to="/login" />
    }

    const props = {
      password: this.state.credentials.password,
      password_confirmation: this.state.credentials.password_confirmation,
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    }

    return (<div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="mx-auto">
              <span className="anchor"/>
              <div className="card has-shadow">
                <div className="card-body">
                  { this.state.errorMessage ? 
                    (<div className="alert alert-danger">{this.state.errorMessage}</div>)
                    : null
                  }
                  <Form {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Page
