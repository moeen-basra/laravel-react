// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { articleEditRequest, articleUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'EditArticle'
  static propTypes = {
    match: PropTypes.object.isRequired,
    article: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      title: 'required|min:3',
      content: 'required|min:10',
      description: 'required|min:10',
    })
    
    const article = this.props.article.toJson()
    
    this.state = {
      article,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentWillMount() {
    this.loadArticle()
  }
  
  componentWillReceiveProps(nextProps) {
    const article = nextProps.article.toJson()
    
    if (!_.isEqual(this.state.article, article)) {
      this.setState({ article })
    }
    
  }
  
  loadArticle() {
    const { match, article, dispatch } = this.props
    
    if (!article.id) {
      dispatch(articleEditRequest(match.params.id))
    }
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
    
    this.setState({ article: { ...this.state.article, [name]: value} })
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const article = this.state.article
    const { errors } = this.validator
    
    this.validator.validateAll(article)
      .then((success) => {
        if (success) {
          this.submit(article)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(article) {
    this.props.dispatch(articleUpdateRequest(article))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
        
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
        
        this.setState({ errors })
      })
  }
  
  renderForm() {
    const { article } = this.props
    
    if (article.id) {
      return <Form {...this.state}
                   onChange={this.handleChange}
                   onSubmit={this.handleSubmit} />
    }
  }
  
  render() {
    return <main className="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
      <h1>Edit</h1>
      { this.renderForm() }
    </main>
  }
}

export default Page
