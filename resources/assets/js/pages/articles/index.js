import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Articles from './Articles'
import Http from '../../utils/Http'

class Container extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }
  
  constructor(props) {
    super (props)
  
    this.state = {
      articles: {
        data: [],
      },
    }
  }
  
  setArticles(articles) {
    this.setState({ articles })
  }
  
  componentWillMount() {
    Http.get('/articles')
      .then(response => {
        this.setArticles(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render() {
    return this.state.articles && <Articles articles={this.state.articles} />
  }
}

export default withRouter(connect()(Container))