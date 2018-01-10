import { connect } from 'react-redux'
import Article from '../../Article'

// import components
import Page from './Page'

const mapStateToProps = () => {
  const article = new Article({})
  return {
    article
  }
}

export default connect(mapStateToProps)(Page)
