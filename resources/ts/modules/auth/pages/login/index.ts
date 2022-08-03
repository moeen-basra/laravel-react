// import libs
import { connect } from 'react-redux'

// import components
import { LoginPage } from './Page'

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(LoginPage)
