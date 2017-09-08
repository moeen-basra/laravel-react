//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Http from '../../utils/Http'
import ArticleRow from './ArticleRow'
import Paginator from '../common/Paginator'

class Articles extends Component {
  
  static propTypes = {
    articles: PropTypes.object.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.pageChange = this.pageChange.bind(this)
    this.doRemove = this.doRemove.bind(this)
  }
  
  pageChange(url) {
    Http.get(url)
      .then(response => {
        this.setArticles(response.data)
      })
      .catch(() => {
      
      })
  }
  
  doRemove(e, id) {
    e.preventDefault()
  
    Http.delete(`/articles/${id}`)
      .then(() => {
        this.updateDeleted(id)
      })
      .catch(() => {
      
      })
  }
  
  updateDeleted(id) {
    const { articles } = this.props
    
    articles.data = articles.data.filter((article) => {
      return article.id !== id
    })
    
    this.setArticles(articles)
  }
  
  renderArticles(articles) {
    return articles.map((article, index) => (
      <ArticleRow key={`article-${index}`} article={article} doRemove={this.doRemove} />
    ))
  }
  
  render() {
    const { articles } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Articles</h1>
          </div>
        </div>
        <Paginator prev_page_url={articles.prev_page_url} next_page_url={articles.next_page_url}
                   pageChange={this.pageChange} />
        <table className="table table-striped">
          <thead>
          <tr>
            <th>S No</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          { (articles.data && articles.data.length) ? this.renderArticles(articles.data) : null }
          </tbody>
        </table>
        <Paginator prev_page_url={articles.prev_page_url} next_page_url={articles.next_page_url}
                   pageChange={this.pageChange} />
      </div>
    )
  }
}

export default Articles
