//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Navigation from '../common/navigation'
import ScrollTop from '../common/scroll-top'
import Footer from '../common/footer'

const containerStyle = {
  paddingTop: '3.5rem',
}

const displayName = 'Public Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PublicLayout({ children }) {
  return <div style={containerStyle}>
    <Navigation/>
    <main style={{ minHeight: '100vh'}}>
      { children }
      <ScrollTop />
    </main>
    <Footer/>
  </div>
}

PublicLayout.dispatch = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout
