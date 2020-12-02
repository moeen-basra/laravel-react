// import libs
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title';
import {articleFetchRequest} from '../../../../article/service'
import {APP_TITLE} from '../../../../../values'

export default function Page({match, article, dispatch}) {

  const loadArticle = () => {
    if (!article.slug) {
      dispatch(articleFetchRequest(match.params.slug))
    }
  }

  useEffect(() => {
    loadArticle()
  })

  const renderPublishedDate = () => {
    const {publishedAt} = article

    if (publishedAt) {
      return `at ${publishedAt.format('MMMM d, YYYY')}`
    }
  }

  const renderAuthor = () => {
    const {user} = article

    if (user) {
      return `by ${user.name}`
    }
  }

  const renderArticle = () => {
    return (<div className="col-12 col-sm-9 mb-5 mx-auto">
      <h2>{article.title}</h2>
      <small className="text-muted mb-5">{renderPublishedDate()} {renderAuthor()}</small>
      <p className="text-muted mb-5">{article.description}</p>
      <p>{article.content}</p>
    </div>)
  }

  return (
    <DocumentTitle title={`${article.title} - ${APP_TITLE}`}>
      <section id="components-articles">
        <div className="container">
          <div className="row">
            {renderArticle()}
          </div>
        </div>
      </section>
    </DocumentTitle>
  )

}

Page.displayName = 'ArticleShowPage'
Page.propTypes = {
  match: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
