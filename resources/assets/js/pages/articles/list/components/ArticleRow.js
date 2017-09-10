import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'ArticleRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const ArticleRow = ({ index, article, togglePublish, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{article.title}</td>
    <td>{article.description}</td>
    <td>{article.createdAt && article.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{article.updatedAt && article.updatedAt.format('MMMM, DD YYYY')}</td>
    <td>{article.publishedAt && article.publishedAt.format('MMMM, DD YYYY')}</td>
    <td>
      <div className="btn-group" role="group" aria-label="Actions">
        {
          article.published
          ? <button className="btn btn-warning" onClick={() => togglePublish(article.id)}>Un Published</button>
          : <button className="btn btn-success" onClick={() => togglePublish(article.id)}>Publish</button>
        }
        <Link className="btn btn-primary" to={`articles/${article.id}/edit`}>Edit</Link>
        <button className="btn btn-danger" onClick={() => handleRemove(article.id)}>Delete</button>
      </div>
    </td>
  </tr>)
}

ArticleRow.displayName = displayName
ArticleRow.propTypes = propTypes

export default ArticleRow