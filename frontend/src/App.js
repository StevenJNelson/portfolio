import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavbar from "./AppNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="content navbar-offset">
          Hello!
        </div>
      </div>
    );
  }
}

export default App;
