import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from '../models/Article'
import { articleListRequest } from '../../../store/services/article'

import Page from './Page'

class List extends Component {
  static displayName = 'ArticlesList'
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
  
  componentWillMount() {
    const { dispatch, articles } = this.props
    
    if (!articles.length) {
      dispatch(articleListRequest())
    }
  }
  
  render() {
    return <Page {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles.map((article) => new Article(article))
  }
}

export default connect(mapStateToProps)(List)
