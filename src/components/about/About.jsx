import React from 'react';
import "../about/about.css";
import Me from "../../img/Portrait.jpg";

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-wrapper">
         
         <h1>About</h1>
          <p className="about-desc">
          Hello! My name is Austin Morrow. I am a web developer located in Denver, CO. I started out my professional
            career in the non-profit sector. Even before I knew about the basics of web development or even how the
            internet works, I've always loved creativity, problem-solving, and design. I love thinking of an idea and
            bringing it to life from the ground up.<br />
            <br />
            One thing that I learned in non-profit work that is still pertinent to what I do today is that you can learn
            so much about the world through story telling. Hearing what obstacles someone has overcome, learning about
            what they are passionate about, or even hearing what they have to give to the world can break down so many
            walls.
            This discovery opened up so many possibilities even when it comes to making a website or application. Being
            able to showcase someones work, or help a business design their website helps them continue telling their
            story, and in return helps make this world a better place. Let's build something together!
          </p>
        </div>
            
      </div>
      <div className="about-right">
        <img src={Me} alt="" className="about-img" />
      </div>
    </div>
  );
};

export default About;