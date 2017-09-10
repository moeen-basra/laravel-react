// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { articleAddRequest } from '../../../store/services/article'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'AddArticle'
  static propTypes = {
    article: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    const article = this.props.article.toJson()
    
    this.state = {
      article
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  parseData(name, value) {
    const { article } = this.props
    
    article[name] = value
    return article
  }
  
  handleChange(name, value) {
    const article = this.parseData(name, value).toJson()
    
    this.setState({ article })
  }
  
  handleSubmit(e) {
    e.preventDefault()
  
    const article = this.props.article.toJson()
    
    this.props.dispatch(articleAddRequest(article))
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Edit</h1>
      <Form article={this.state.article}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </main>
  }
}

export default Page
