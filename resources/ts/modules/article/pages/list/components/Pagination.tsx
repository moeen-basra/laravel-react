import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pagination extends Component {
  static displayName = 'Pagination'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  renderLinks() {
    const { meta } = this.props
    const range = [...Array(meta.lastPage).keys()]
    
    return range.map(n => {
      const className = meta.currentPage === (n+1) ? 'primary' : 'light'
      
      return <button key={n}
                     type="button"
                     className={`btn btn-${className}`}
                     onClick={() => this.props.onChange(n+1)}>{n+1}</button>
    })
  }
  
  render() {
    return <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group mr-2" role="group" aria-label="First group">
        {this.renderLinks()}
      </div>
    </div>
  }
}

export default Pagination
