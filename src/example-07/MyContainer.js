import React from 'react'
import { withProps } from 'recompose'
import MyComponent from './MyComponent'

const handleClick = ({ title }) => event => alert(title)

const MyContainer = withProps(ownerProps => ({
  onClick: handleClick
}))(MyComponent)

export default MyContainer
