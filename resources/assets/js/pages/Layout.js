//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//import components
import PublicHeader from '../includes/navigation/PublicHeader'
import PrivateHeader from '../includes/navigation/PrivateHeader'

class Layout extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  }
  
  render() {
    const { isAuthenticated, location, children } = this.props
    const containerStyle = {
      marginTop: '60px',
    }
    
    return (
      <div>
        {(isAuthenticated) ? <PrivateHeader location={location} /> : <PublicHeader location={location} />}
        <div className="container" style={containerStyle}>
          {children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.app.isAuthenticated,
  }
}

export default connect(mapStateToProps)(Layout)
