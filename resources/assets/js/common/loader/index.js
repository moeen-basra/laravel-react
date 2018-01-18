import React from 'react'
import PropTypes from 'prop-types'

// set display name for component
const displayName = 'CommonLoader'

// validate component properties
const propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.object,
}

const LoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null
  }
}

LoadingComponent.displayName = displayName
LoadingComponent.propTypes = propTypes

export default LoadingComponent