import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const AppNavbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>Morrow Web Development</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/">About</Nav.Link>
      <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    </>
  );
};

export default AppNavbar;