import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import Clock from './Clock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Clock />
      </div>
    );
  }
}

export default App;
