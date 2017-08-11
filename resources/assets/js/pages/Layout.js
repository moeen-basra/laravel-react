//import libs
import React, { Component } from 'react'

//import components
import Navigation from '../includes/navigation/Navigation'

class Layout extends Component {
  render() {
    const { location } = this.props
    const containerStyle = {
      marginTop: '60px',
    }
    return (
      <div>
        <Navigation location={location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
