//import libs
import React, { Component } from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authLogin } from '../../store/actions/auth'
import Page from './Page'

class Login extends Component {
  
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loginUser: PropTypes.func.isRequired,
  }
  
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }
  
  componentWillUnmount() {
    $('body').removeAttr('style')
  }
  
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    
    return <Page loginUser={this.props.loginUser} />
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.app.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: payload => {
      dispatch(authLogin(payload))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
