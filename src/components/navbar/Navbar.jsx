import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./navbar.css";



const AppNavbar = () => {
return (
<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand style={{ fontSize: 30 }}>Morrow Web Development</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">About</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

</>
);
};

export default AppNavbar;