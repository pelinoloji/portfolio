import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Works from "./Works/Works";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Works />
      </div>
    );
  }
}

export default App;
