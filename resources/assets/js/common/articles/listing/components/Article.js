import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'ArticleComponent'
const propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.object.isRequired,
}

const Article = ({ index, article }) => (
  <div className="col-lg-8 mb-5 mx-auto border border-top-0 border-left-0 border-right-0">
    <h2>{ article.title }</h2>
    <p className="lead">{ article.description }</p>
  </div>
)

Article.displayName = displayName
Article.propTypes = propTypes

export default Article
