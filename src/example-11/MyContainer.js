import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import MyComponent from './MyComponent'

const toggleShowMore = ({ showMore, setShowMore }) =>
  setShowMore(!showMore)

const MyContainer = compose(
  withState('showMore', 'setShowMore', false),
  withHandlers({ toggleShowMore })
)(MyComponent)

export default MyContainer
