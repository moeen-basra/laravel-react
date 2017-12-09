import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { articleListRequest } from '../../store/services/article'

// import Components
import Articles from '../../common/articles/listing/index'

class Page extends Component {
  static displayName = 'HomePage'
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.state = {
      //
    }
  }
  
  componentDidMount() {
    this.props.dispatch(articleListRequest({ url: '/articles/published' }))
  }
  
  render() {
    return (
      <div>
        <header className="bg-danger text-white">
          <div className="container text-center">
            <img width="125" height="125" src="/img/moeen.jpg" alt="..." className="rounded-circle" />
            <h1>Moeen Farooq Basra</h1>
            <p className="lead">Master in Information Technology</p>
            <p className="lead">Web Developer at&nbsp;
                <a className="text-white"
                   href="http://awok.com"
                   target="_blank"
                   rel="noreferrer noopener">Awok.com</a>
            </p>
            <p className="lead"><i className="fa fa-heart text-danger" />{`{ PHP, JavaScript, Python, MySQL, MongoDB }`}</p>
          </div>
        </header>
        <Articles/>
      </div>
    )
  }
}

export default Page
