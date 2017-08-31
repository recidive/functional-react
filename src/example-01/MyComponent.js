import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component {
  render() {
    const { title } = this.props
    return <h1>{ title }</h1>
  }
}

MyComponent.propTypes = {
  title: PropTypes.string
}

export default MyComponent
