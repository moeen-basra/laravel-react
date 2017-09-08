// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { login } from '../../store/services/auth'

// import components
import Form from './components/Form'

const displayName = 'LoginPage'

class Page extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    
    this.state = {
      email: '',
      password: '',
      remember: false,
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(name, value) {
    this.setState({ [name]: value })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const { email, password, remember } = this.state
    
    this.props.dispatch(login({ email, password, remember }))
  }
  
  render() {
    const props = {
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    }
    
    return <Form {...props} />
  }
}

Page.displayName = displayName

export default Page
