// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { articleListRequest, articleUpdateRequest } from '../../../store/services/article'

// import components
import ArticleRow from './components/ArticleRow'
import Pagination from './components/Pagination'

class Page extends Component {
  static displayName = 'ArticlesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    articles: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
    
    this.togglePublish = this.togglePublish.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)
  }
  
  pageChange(pageNumber) {
    this.props.dispatch(articleListRequest(pageNumber))
  }
  
  togglePublish(id) {
    const article = this.props.articles.find(article => (article.id === id))
    
    if (!article)
      return
  
    article.published = !article.published
    if (article.published) {
      article.publishedAt = moment()
    } else {
      article.publishedAt = null
    }
    
    this.props.dispatch(articleUpdateRequest(article.toJson()))
  }
  
  handleRemove(id) {
  
    // this.store.dispatch()
    
    console.log(id)
  }
  
  renderArticles() {
    return this.props.articles.map((article, index) => {
      return <ArticleRow key={index}
                         article={article}
                         index={index}
                         togglePublish={this.togglePublish}/>
    })
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Articles</h1>
      <table className="table table-responsive table-striped">
        <thead className="thead-inverse">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Published At</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        { this.renderArticles() }
        </tbody>
      </table>
      <Pagination meta={this.props.meta} onChange={this.pageChange}/>
      </main>
  }
}

export default Page
