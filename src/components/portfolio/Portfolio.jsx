import React from 'react';
import "./portfolio.css";
import github from "../../img/icons8-github.svg";
import www from "../../img/icons8-website-50.png";

export const Portfolio = ({img, link, link2, text}) => {
return (
  <div className="projectCard">
    <a>
      <img src={img} alt="" className="image"></img>
    </a>
    <div>
    <a href={link2} target="_blank" rel="noreferrer">
      <img src={github} alt="" className="icon"></img>
    </a>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={www} alt="" className="icon"></img>
    </a>
    <h5 className="text">{text}</h5>
    </div>
  </div>
)
}