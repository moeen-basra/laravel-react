import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Header from "./components/Header"
import Articles from "../../../../common/articles/listing"

// import services
import { articleListRequest } from "../../../article/service"

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
      <Header/>
      <Articles/>
    </div>
  }
}

export default Page
