import React from "react";
import "./Header.css";
import headerImg from "./headerImg.jpg";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img className="HeaderImg" src={headerImg} alt={"header image"} />
        <div className="BoldTitle">I'm Pelin</div>
        <p className="Title">
          Cat ipsum dolor sit amet, claws in the eye of the beholder jump on
          human and sleep on her all night long be long in the bed, purr in the
          morning and then give a bite to every human around for not waking up
          request food, purr loud scratch the walls, the floor, the windows, the
          humans.
        </p>
        <div className="icons">
          <a
            href="https://github.com/pelinoloji"
            //target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github" />
          </a>
          <a
            href="https://www.freecodecamp.org/certification/pelinoloji/responsive-web-design"
            //target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-free-code-camp" />
          </a>
          <a
            href="https://codepen.io/pelinoloji/"
            //target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-codepen" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
