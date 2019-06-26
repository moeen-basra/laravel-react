// libs
import { connect } from 'react-redux'
import Article from '../../../modules/article/Article'

// components
import Articles from './components/Articles'

const mapStateToProps = state => {
  const {data, ...meta} = state.articles
  
  return {
    articles: data.map((article) => new Article(article)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Articles)
