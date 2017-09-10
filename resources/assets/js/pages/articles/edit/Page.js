// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { articleRequest, articleUpdateRequest } from '../../../store/services/article'
import { update as articleUpdate } from '../../../store/actions/article'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'EditArticle'
  static propTypes = {
    match: PropTypes.object.isRequired,
    article: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentWillMount() {
    this.loadArticle()
  }
  
  loadArticle() {
    const { match, article, dispatch } = this.props
    
    if (!article.id) {
      dispatch(articleRequest(match.params.id))
    }
  }
  
  parseData(name, value) {
    const { article } = this.props
  
    article[name] = value
    return article
  }
  
  handleChange(name, value) {
    const article = this.parseData(name, value).toJson()
    
    this.props.dispatch(articleUpdate(article))
  }
  
  handleSubmit(e) {
    e.preventDefault()
  
    const article = this.props.article.toJson()
    
    this.props.dispatch(articleUpdateRequest(article))
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Edit</h1>
      <Form article={this.props.article}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </main>
  }
}

export default Page
