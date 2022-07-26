//import libs
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// import services actions
import { fetchUser } from '../modules/auth/service'

// import components
import PrivateLayout from './Private'
import PublicLayout from './Public'

function Layout(props) {
  console.log(props)
  const { isAuthenticated, user, children, dispatch } = props

  useEffect(() => {
    if (isAuthenticated && !user.id) {
      dispatch(fetchUser())
    }
  }, [isAuthenticated])

  if (isAuthenticated) {
    return <PrivateLayout {...props}>{children}</PrivateLayout>
  }
  return <PublicLayout {...props}>{children}</PublicLayout>
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Layout)
