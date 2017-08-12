import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Actions extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    doRemove: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
  }
  
  static edit(id) {
    window.location.href = `/articles/${id}/edit`
  }
  
  render() {
    const { article, doRemove } = this.props
    
    return (
      <div className="btn-group">
        <Link to={`/articles/${article.id}/edit`} className="btn btn-primary btn-sm">
          <i className="glyphicon glyphicon-pencil" /> Edit
        </Link>
        <a href="#" onClick={e => doRemove(e, article.id)} className="btn btn-danger btn-sm">
          <i className="glyphicon glyphicon-trash" /> Trash
        </a>
      </div>
    )
  }
  
}

export default Actions