import React from "react";
import './NavBar.css';
//import { Link } from "react-router-dom";
//import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


class NavBar extends React.Component {
  render() {
  return (
      <div className="Container">
        <nav className="NavBarContainer">
          <ul className='NavBar'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;



