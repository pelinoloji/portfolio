import React from "react";
import { Nav, Navbar } from 'react-bootstrap';


function Navigation() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Works</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">About Me</Nav.Link>
        <Nav.Link href="#features">Contact Me</Nav.Link>
      </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
