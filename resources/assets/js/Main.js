//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from './store/services/auth'

// import components
import Navigation from './includes/navigation'

const containerStyle = {
  marginTop: '60px',
}

class Main extends Component {
  static displayName = 'MainContainer'
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  componentWillMount() {
    const { isAuthenticated, user } = this.props
    
    if (isAuthenticated && !user.id) {
      this.props.dispatch(fetchUser())
    }
    
  }
  
  render() {
    return <div className="container" style={containerStyle}>
      <Navigation/>
      {this.props.children}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(Main)
