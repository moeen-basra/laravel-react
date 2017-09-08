import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import User from '../models/User'

// import components
import Page from './Page'

class UserContainer extends Component {
  static displayName = 'UserContainer'
  static propTypes = {
    user: PropTypes.instanceOf(User),
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  render() {
    const { user, dispatch } = this.props
    
    return user.id && <Page dispatch={dispatch} user={user}/>
  }
}

const mapStateToProps = state => {
  return {
    user: new User(state.user)
  }
}

export default connect(mapStateToProps)(UserContainer)
