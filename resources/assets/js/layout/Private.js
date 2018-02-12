//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import services actions
import { fetchUser } from '../modules/auth/service'

// import components
import Navigation from '../common/navigation'
import ScrollTop from '../common/scroll-top'
import Footer from '../common/footer'

const containerStyle = {
  paddingTop: '3.5rem',
}

const displayName = 'MainContainer'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PrivateLayout() {
  return <div style={containerStyle}>
    <Navigation/>
    <main style={{ minHeight: '100vh'}}>
      { this.props.children }
      <ScrollTop />
    </main>
    <Footer/>
  </div>
}

PrivateLayout.dispatch = displayName
PrivateLayout.propTypes = propTypes

export default PrivateLayout
