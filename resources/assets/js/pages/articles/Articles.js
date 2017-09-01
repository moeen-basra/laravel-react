//import libs
import React, { Component } from 'react'
import axios from 'axios'
import ArticleRow from './ArticleRow'
import Paginator from '../common/Paginator'

class Articles extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      articles: {
        data: [],
      },
    }
    
    this.pageChange = this.pageChange.bind(this)
    this.doRemove = this.doRemove.bind(this)
  }
  
  componentDidMount() {
    axios.get('/api/articles')
      .then(response => {
        this.setArticles(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  pageChange(url) {
    axios.get(url)
      .then(response => {
        this.setArticles(response.data)
      })
      .catch(() => {
      
      })
  }
  
  setArticles(articles) {
    this.setState({ articles })
  }
  
  doRemove(e, id) {
    e.preventDefault()
    
    axios.delete(`/api/articles/${id}`)
      .then(() => {
        this.updateDeleted(id)
      })
      .catch(() => {
      
      })
  }
  
  updateDeleted(id) {
    const { articles } = this.state
    
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
    const { articles } = this.state
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
