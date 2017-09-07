import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ title, more, showMore, setShowMore }) => (
  <div>
    <h1>{ title }</h1>
    <button onClick={ toggleShowMore(showMore, setShowMore) }>
      Show { showMore ? 'Less' : 'More'}
    </button>
    { showMore && <p>{ more }</p> }
  </div>
)

const toggleShowMore = (showMore, setShowMore) =>
  () => setShowMore(!showMore)

MyComponent.propTypes = {
  title: PropTypes.string,
  more: PropTypes.string,
  showMore: PropTypes.bool,
  setShowMore: PropTypes.function
}

export default MyComponent
