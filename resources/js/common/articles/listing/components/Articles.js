import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

class Articles extends Component {
  static displayName = 'Articles'
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
      return <Article key={`article-${index}`}
                      index={index}
                      article={article}/>
    })
  }
  
  render() {
    return (<section id="components-articles">
      <div className="container">
        <div className="row">
          { this.props.articles && this.renderArticles() }
        </div>
      </div>
    </section>)
  }
}

export default Articles
