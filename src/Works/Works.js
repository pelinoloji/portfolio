import React from "react";
import "./Works.css";
import dummyProject from "./dummyProject.png";

function Works() {

  return (
    <div className="Works">
      <p className="WorksTitle">Projects</p>
      <div className="Card">
        <div className="CardImage">
          <a href="https://codepen.io/pelinoloji/pen/GzWVZV" target="_blank"><img src={dummyProject} alt={"image"} /></a>
        </div>
        <div className="CardText">
          <p>Bootstrap Checkout Page.</p>
        </div>
      </div>
      <div className="Card">
        <div className="CardImage">
          <a href="https://codepen.io/pelinoloji/pen/NLVJvj" target="_blank"><img src={dummyProject} alt={"image"} /></a>
        </div>
        <div className="CardText">
          <p>Product Landing Page.</p>
        </div>
      </div>
      <div className="Card">
        <div className="CardImage">
          <a href="#" target="_blank"></a><img src={dummyProject} alt={"image"} />
        </div>
        <div className="CardText">
          <p>Kodflix React Project.</p>
        </div>
      </div>
    </div>
  );
}

export default Works;
