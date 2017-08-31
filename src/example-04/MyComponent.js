import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ title }) => (
  <div>
    <h1>{ title }</h1>
    <button onClick={ handleClick({ title }) }>Ok</button>
  </div>
)

MyComponent.propTypes = {
  title: PropTypes.string
}

export default MyComponent

const handleClick = ({ title }) => event => alert(title)
