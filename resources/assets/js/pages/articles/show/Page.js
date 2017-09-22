// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { articleFetchRequest } from '../../../store/services/article'

class Page extends Component {
  static displayName = 'ArticleShowPage'
  static propTypes = {
    match: PropTypes.object.isRequired,
    article: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  componentWillMount() {
    this.loadArticle()
  }
  
  loadArticle() {
    const { match, article, dispatch } = this.props
    
    if (!article.id) {
      dispatch(articleFetchRequest(match.params.id))
    }
  }
  
  renderPublishedDate() {
    const { publishedAt } = this.props.article
    
    if (publishedAt) {
      return `at ${publishedAt.format('MMMM d, YYYY')}`
    }
  }
  
  renderAuthor() {
    const { user } = this.props.article
    
    if (user) {
      return `by ${user.name}`
    }
    
  }
  
  createMarkup() {
    return {__html: this.props.article.content};
  }
  
  renderArticle() {
    const { article } = this.props
    return (<div className="col-12 col-sm-9 mb-5 mx-auto">
      <h2>{article.title}</h2>
      <small className="text-muted mb-5">{ this.renderPublishedDate() } { this.renderAuthor() }</small>
      <p className="text-muted mb-5">{article.description}</p>
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    </div>)
  }
  
  render() {
    return(<section id="components-articles">
      <div className="container">
        <div className="row">
          {this.renderArticle()}
        </div>
      </div>
    </section>)
  }
}

export default Page
