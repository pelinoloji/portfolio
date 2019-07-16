import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';


class NavBar extends React.Component {
  render() {
  return (
    <Router>
      <div className="Container">
        <nav className="NavBarContainer">
          <ul className='NavBar'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </Router>
    );
  }
}
export default NavBar;

