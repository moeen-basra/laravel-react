import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Page extends Component {
  static displayName = 'ArticlesPage'
  static propTypes = {
    articles: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  renderArticles() {
    return this.props.articles.map((article, index) => {
      return <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{article.title}</td>
        <td>{article.description}</td>
        <td>{article.publishedAt && article.publishedAt.format('MMMM, DD YYYY')}</td>
      </tr>
    })
  }
  
  render() {
    return <table className="table table-responsive table-striped">
      <thead className="thead-inverse">
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Published At</th>
      </tr>
      </thead>
      <tbody>
      { this.renderArticles() }
      </tbody>
    </table>
  }
}

export default Page
