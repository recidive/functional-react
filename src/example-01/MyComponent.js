import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component {
  render() {
    const { title } = this.props
    return <h2>{ title }</h2>
  }
}

MyComponent.propTypes = {
  title: PropTypes.string
}

export default MyComponent
