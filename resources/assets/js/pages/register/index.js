// import libs
import React, { Component } from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// import components
import Page from './Page'

class Register extends Component {
  
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
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
    
    return <Page dispatch={this.props.dispatch} history={this.props.history} />
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Register)
