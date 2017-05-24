import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import Example01MyComponent from './example-01/MyComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Functional React</h2>
        </div>

        <p className="App-intro">
          Functional React Examples. To see the source check the src folder.
        </p>

        <hr />
        <h1>Example 1</h1>
        <p>A class based component (not functional).</p>
        <Example01MyComponent title="Hello World" />
        <hr />
      </div>
    );
  }
}

export default App;
