//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUser } from './store/services/user'

// import components
import Navigation from './includes/navigation'

const containerStyle = {
  paddingTop: '3.5rem',
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
    return <div style={containerStyle}>
      <Navigation/>
      <div className="container-fluid">
        <div className="row">
          { this.props.children }
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Main)
