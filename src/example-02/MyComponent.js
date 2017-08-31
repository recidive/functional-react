import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ title }) => <h1>{ title }</h1>

MyComponent.propTypes = {
  title: PropTypes.string
}

export default MyComponent
