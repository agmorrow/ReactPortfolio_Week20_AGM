import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import github from "../../img/icons8-github.svg";
import linkedin from "../../img/icons8-linkedin-circled.svg";
import twitter from "../../img/icons8-twitter-circled.svg";

const Footer = () => {
  return (
<>
  
  <Navbar bg="dark" variant="dark">
    <Container className="justify-content-center">
      <Navbar.Brand href="https://github.com/agmorrow">
        <img
          alt=""
          src={github}
          width="42"
          height="42"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Brand href="https://www.linkedin.com/in/agmorrow/">
        <img
          alt=""
          src={linkedin}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Brand href="">
        <img
          alt=""
          src={twitter}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
  );
};


export default Footer;