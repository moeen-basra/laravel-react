//import libs
import $ from 'jquery'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Http from '../../utils/Http'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'RegisterPage'
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
    
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChange(name, value) {
    const { user } = this.state
    
    user[name] = value
    
    this.setState({ user })
  }
  
  onSubmit(e) {
    e.preventDefault()
    
    const { user } = this.state
  
    Http.post('/auth/register', user)
      .then(res => {
        if (res.status === 201) {
          this.props.history.push('/login')
        } else {
          return res
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }
  
  componentWillUnmount() {
    $('body').removeAttr('style')
  }
  
  render() {
    return <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-sm-12">
          <Form {...this.state.user} onChange={this.onChange} onSubmit={this.onSubmit} />
        </div>
      </div>
    </div>
  }
}

export default Page
