import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg'

import './App.css'

import Example01MyComponent from './example-01/MyComponent'
import Example02MyComponent from './example-02/MyComponent'
import Example03MyComponent from './example-03/MyComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h2>Functional React</h2>
          </div>

          <Navigation />

          <p className="App-intro">
            Functional React Examples. To see the source check the src folder.
          </p>

          <hr />

          <Route exact path="/" component={ HomePage } />
          <Route path="/example-01" component={ Example01Page } />
          <Route path="/example-02" component={ Example02Page } />
          <Route path="/example-03" component={ Example03Page } />
        </div>
      </Router>
    )
  }
}

export default App

const Navigation = () => (
  <ul>
    <li><Link to="/example-01">Example 1</Link></li>
    <li><Link to="/example-02">Example 2</Link></li>
    <li><Link to="/example-03">Example 3</Link></li>
  </ul>
)

const HomePage = () => <h1>Click the links to access the examples!</h1>

const Example01Page = () => (
  <div className="App-main">
    <h1>Example 1</h1>
    <p>A class based component (not functional).</p>
    <Example01MyComponent title="Hello World!" />
  </div>
)

const Example02Page = () => (
  <div className="App-main">
    <h1>Example 2</h1>
    <p>A functional component.</p>
    <Example02MyComponent title="Hello World!" />
  </div>
)

const Example03Page = () => (
  <div className="App-main">
    <h1>Example 3</h1>
    <p>A class based component with an event handler.</p>
    <Example03MyComponent title="Hello World!" />
  </div>
)
