import React from 'react'
import { withState } from 'recompose'
import MyComponent from './MyComponent'

const MyContainer = withState('showMore', 'setShowMore', false)(MyComponent)

export default MyContainer
