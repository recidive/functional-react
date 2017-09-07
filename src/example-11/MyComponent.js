import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ title, more, showMore, setShowMore, toggleShowMore }) => (
  <div>
    <h1>{ title }</h1>
    <button onClick={ () => { setShowMore(!showMore) } }>
      Show { showMore ? 'Less' : 'More'}
    </button>
    { showMore && <p>{ more }</p> }
  </div>
)

MyComponent.propTypes = {
  title: PropTypes.string,
  more: PropTypes.string,
  showMore: PropTypes.bool,
  setShowMore: PropTypes.function,
  toggleShowMore: PropTypes.function
}

export default MyComponent
