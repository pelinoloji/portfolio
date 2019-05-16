import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


function NavBar() {
  return (
    <Router>
      <div className="Container">
        <nav className="NavBarContainer">
          <ul className='NavBar'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default NavBar;

