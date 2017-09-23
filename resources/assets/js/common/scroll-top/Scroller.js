import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const style = {
  float: 'right',
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
}

class ScrollButton extends Component {
  constructor() {
    super()
    
    this.delayInMs = '16'
    this.scrollStepInPx = 50
    
    this.state = {
      intervalId: 0,
      showScoller: false,
    }
    
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.toggleScroll = this.toggleScroll.bind(this)
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.toggleScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleScroll)
  }
  
  toggleScroll() {
    if (window.pageYOffset > 200) {
      this.setState({ showScoller: true })
    } else {
      this.setState({ showScoller: false })
    }
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.scrollStepInPx)
  }
  
  scrollToTop(e) {
    e.preventDefault()
    
    let intervalId = setInterval(this.scrollStep.bind(this), this.delayInMs)
    this.setState({ intervalId: intervalId })
  }
  
  render() {
    if (this.state.showScoller) {
      return (<a href="#" title='Back to top'
                 style={style}
                 onClick={(e) => { this.scrollToTop(e) }}>
        <i className="fa fa-chevron-circle-up"
           style={{ fontSize: '3rem' }}
           aria-hidden="true" />
      </a>)
    }
    return null
  }
}

export default ScrollButton
