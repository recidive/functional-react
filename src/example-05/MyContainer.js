import React from 'react'
import PropTypes from 'prop-types'
import MyComponent from './MyComponent'

const MyContainer = ({ title }) => <MyComponent title={ title } onClick={ handleClick } />

MyContainer.propTypes = {
  title: PropTypes.string
}

export default MyContainer

const handleClick = ({ title }) => event => alert(title)
