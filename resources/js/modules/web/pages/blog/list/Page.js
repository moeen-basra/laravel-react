import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Articles from "../../../../../common/articles/listing/index"

// import services
import { articleListRequest } from "../../../../article/service"

class Page extends Component {
  static displayName = "HomePage"
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(articleListRequest({ url: '/articles/published' }))
  }

  render() {
    return <div>
      <Articles/>
    </div>
  }
}

export default Page
