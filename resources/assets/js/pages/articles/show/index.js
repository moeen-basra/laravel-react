import { connect } from 'react-redux'
import Article from '../../../models/Article'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  
  const article = state.articles.data.find(article => article.slug === params.slug)
  return {
    article: article ? new Article(article) : new Article({})
  }
}

export default connect(mapStateToProps)(Page)
