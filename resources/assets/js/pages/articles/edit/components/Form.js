import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'ArticleFrom'
const propTypes = {
  article: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ article, onChange, onSubmit }) => {
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
      <div className="col-sm-10">
        <input type="text"
               id="title"
               name="title"
               className="form-control"
               placeholder="Title"
               value={article.title}
               onChange={e => onChange(e.target.name, e.target.value)} />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
      <div className="col-sm-10">
        <textarea id="description"
                  name="description"
                  className="form-control"
                  rows="3"
                  placeholder="Description"
                  value={article.description}
                  onChange={e => onChange(e.target.name, e.target.value)} />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="content" className="col-sm-2 col-form-label">Content</label>
      <div className="col-sm-10">
        <textarea id="content"
                  name="content"
                  className="form-control"
                  rows="3"
                  placeholder="Content"
                  value={article.content}
                  onChange={e => onChange(e.target.name, e.target.value)} />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10 ml-auto">
        <button type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
