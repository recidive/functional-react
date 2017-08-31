import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyComponent extends Component {
  handleClick = () => {
    const { title } = this.props
    alert(title)
  }

  render() {
    const { title } = this.props
    return (
      <div>
        <h1>{ title }</h1>
        <button onClick={ this.handleClick }>Ok</button>
      </div>
    )
  }
}

MyComponent.propTypes = {
  title: PropTypes.string
}

export default MyComponent
