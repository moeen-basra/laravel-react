// import libs
import { connect } from 'react-redux'
import Article from '../../Article'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.articles
  
  return {
    articles: data.map((article) => new Article(article)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
