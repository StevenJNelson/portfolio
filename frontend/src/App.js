import React, { Component } from "react";
import "./media/App.css";
import AppNavbar from "./components/AppNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="content">
          <h1 align="center">Steven Nelson - CS Portfolio Website</h1>
          <p align="center">
            🚧 Currently under construction. Check back for updates. 🚧
          </p>
        </div>
      </div>
    );
  }
}

export default App;
