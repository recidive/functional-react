import React from 'react'
import { withHandlers } from 'recompose'
import MyComponent from './MyComponent'

const handleClick = ({ title }) => () => alert(title)

const MyContainer = withHandlers({
  onClick: handleClick
})(MyComponent)

export default MyContainer
