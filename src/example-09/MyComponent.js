import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ title, onClick: handleClick }) => (
  <div>
    <h1>{ title }</h1>
    <button onClick={ handleClick }>Ok</button>
  </div>
)

MyComponent.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.function
}

export default MyComponent
