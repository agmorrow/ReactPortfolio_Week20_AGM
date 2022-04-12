import React from 'react';
import "./portfolio.css";

export const Portfolio = ({img, link}) => {
return (
  <div className="projectCard">
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt="" className="image"></img>
    </a>
  </div>
)
}