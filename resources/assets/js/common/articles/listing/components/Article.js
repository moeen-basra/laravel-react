// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import { Link } from 'react-router-dom'

const displayName = 'ArticleComponent'
const propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.object.isRequired,
}

const renderAuthor = (article) => {
  return article.user && `By ${ article.user.name }`
}

const renderPublishedAt = (article) => {
  return article.publishedAt && `at ${article.publishedAt.format('MMMM D, YYYY')}`
}

const Article = ({ index, article }) => (
  <div className="col-12 col-sm-9 mb-5 mx-auto">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{article.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{renderPublishedAt(article)}</h6>
        <p className="card-text">{ article.description }</p>
        <Link to={`articles/${article.id}`} className="card-link">Read More</Link>
      </div>
    </div>
  </div>
)

Article.displayName = displayName
Article.propTypes = propTypes

export default Article
