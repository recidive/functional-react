import React from 'react'
import { mapProps } from 'recompose'
import MyComponent from './MyComponent'

const handleClick = ({ title }) => event => alert(title)

const MyContainer = mapProps(({ title }) => ({
  title,
  onClick: handleClick
}))(MyComponent)

export default MyContainer
