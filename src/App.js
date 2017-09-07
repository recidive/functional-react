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
import Example04MyComponent from './example-04/MyComponent'
import Example05MyContainer from './example-05/MyContainer'
import Example06MyContainer from './example-06/MyContainer'
import Example07MyContainer from './example-07/MyContainer'
import Example08MyContainer from './example-08/MyContainer'
import Example09MyContainer from './example-09/MyContainer'
import Example10MyContainer from './example-10/MyContainer'
import Example11MyContainer from './example-11/MyContainer'

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
          <Route path="/example-04" component={ Example04Page } />
          <Route path="/example-05" component={ Example05Page } />
          <Route path="/example-06" component={ Example06Page } />
          <Route path="/example-07" component={ Example07Page } />
          <Route path="/example-08" component={ Example08Page } />
          <Route path="/example-09" component={ Example09Page } />
          <Route path="/example-10" component={ Example10Page } />
          <Route path="/example-11" component={ Example11Page } />
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
    <li><Link to="/example-04">Example 4</Link></li>
    <li><Link to="/example-05">Example 5</Link></li>
    <li><Link to="/example-06">Example 6</Link></li>
    <li><Link to="/example-07">Example 7</Link></li>
    <li><Link to="/example-08">Example 8</Link></li>
    <li><Link to="/example-09">Example 9</Link></li>
    <li><Link to="/example-10">Example 10</Link></li>
    <li><Link to="/example-11">Example 11</Link></li>
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

const Example04Page = () => (
  <div className="App-main">
    <h1>Example 4</h1>
    <p>A functional component with an event handler.</p>
    <Example04MyComponent title="Hello World!" />
  </div>
)

const Example05Page = () => (
  <div className="App-main">
    <h1>Example 5</h1>
    <p>A functional container component with an event handler.</p>
    <Example05MyContainer title="Hello World!" />
  </div>
)

const Example06Page = () => (
  <div className="App-main">
    <h1>Example 6</h1>
    <p>A functional container created with <em>withProps()</em>.</p>
    <Example06MyContainer title="Hello World!" />
  </div>
)

const Example07Page = () => (
  <div className="App-main">
    <h1>Example 7</h1>
    <p>A functional container created with <em>withProps()</em>.</p>
    <Example07MyContainer title="Hello World!" />
  </div>
)

const Example08Page = () => (
  <div className="App-main">
    <h1>Example 8</h1>
    <p>A functional container created with <em>mapProps()</em>.</p>
    <Example08MyContainer title="Hello World!" />
  </div>
)

const Example09Page = () => (
  <div className="App-main">
    <h1>Example 9</h1>
    <p>A functional container created with <em>mapProps()</em>.</p>
    <Example09MyContainer title="Hello World!" />
  </div>
)

const Example10Page = () => (
  <div className="App-main">
    <h1>Example 10</h1>
    <p>A functional container created with <em>withState()</em>.</p>
    <Example10MyContainer title="Hello World!" more="Hello everything else!" />
  </div>
)

const Example11Page = () => (
  <div className="App-main">
    <h1>Example 11</h1>
    <p>A functional container created with <em>withState and withHandlers()</em>.</p>
    <Example11MyContainer title="Hello World!" more="Hello everything else!" />
  </div>
)
