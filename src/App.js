import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default App;
