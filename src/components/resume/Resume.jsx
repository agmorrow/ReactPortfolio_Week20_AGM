import React from 'react';
import Browser from "../../img/browserIcon.png";
import Server from "../../img/developmentIcon.png";
import Data from "../../img/developmentIcon.png";
import Dev from "../../img/deploymentIcon.png";
import './resume.css';


export const Resume = () => {
return (
  <div>
    <div className="skills" id="skills">
    <h1 className="skillHeader">My Skills</h1>
    <div className="topSkills">
      <div className="skillCard">
      <img src={Browser} alt="" className="c-icon" />
        <h3>Browser Based Technology</h3>
        <p>HTML, CSS, JavaScript, jQuery, Responsive Design, <br />Bootstrap, Local Storage, Session Storage</p>
      </div>
      <div className="skillCard">
      <img src={Server} alt="" className="c-icon" />
        <h3>Serverside Development</h3>
        <p>Node.js, Express.js, User Authentication</p>
      </div>
    </div>
    <div className="bottomSkills">
      <div className="skillCard">
      <img src={Data} alt="" className="c-icon" />
        <h3>Database</h3>
        <p>MySQL, MongoDB</p>
      </div>
      <div className="skillCard">
      <img src={Dev} alt="" className="c-icon" />
        <h3>Deployment</h3>
        <p>Heroku, Git</p>
      </div>
    </div>
  </div>
  </div>
)
}
