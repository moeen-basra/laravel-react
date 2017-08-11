import React, { Component } from 'react'

class EditArticle extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      article: {
        slug: '',
        title: '',
        content: 'Loading...',
      },
      articleId: props.match.params.id,
      saving: false,
      type: '',
      message: '',
    }
    
    this.getArticle()
    this.onChange = this.onChange.bind(this)
    this.saveArticle = this.saveArticle.bind(this)
  }
  
  getArticle() {
    const { articleId } = this.state
    
    axios.get(`/api/articles/${articleId}`)
      .then(response => {
        this.updateArticle(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  updateArticle(article) {
    this.setState({ article })
  }
  
  onChange(e) {
    let { article } = this.state
    article[e.target.name] = e.target.value
    this.updateArticle(article)
  }
  
  saveArticle(e) {
    
    const { articleId, article } = this.state
    
    this.setState({ saving: true })
    
    axios.put(`/api/articles/${articleId}`, article)
      .then(response => {
        if (response.status === 200) {
          this.showMessage('success', 'Article updated successfully!')
        }
        this.setState({ saving: false })
      })
      .catch(error => {
        this.setState({ saving: false })
        this.showMessage('error', 'Unable to save article.')
      })
  }
  
  showMessage(type, message) {
    this.setState({ type, message })
  }
  
  resetMessage(type = '', message = '') {
    this.showMessage({ type, message })
  }
  
  render() {
    const { article, saving, type, message } = this.state
    
    return (
      <div className="row">
        <div className="col-lg-12">
          
          <div
            className={'alert' + (type === 'success' ? ' alert-success ' : ' alert-danger ') + (message !== '' ? '' : ' hidden ')}>
            {message}
          </div>
          
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input type="text" className="form-control" name="title" value={article.title}
                   onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Slug</label>
            <input type="text" className="form-control" name="slug" value={article.slug}
                   onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">Content</label>
            <textarea className="form-control" rows="10" name="content" value={article.content}
                      onChange={this.onChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-sm" onClick={this.saveArticle} disabled={saving}>
              {saving ? ('Saving Article..') : ('Save Article')}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditArticle