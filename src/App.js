import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Ball from './Ball';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball num={17}/>
      </div>
    );

  }
}

export default App;
