import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="body-tertiary" variant="light">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="me-auto">
            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <NavDropdown title="Dropdown link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
