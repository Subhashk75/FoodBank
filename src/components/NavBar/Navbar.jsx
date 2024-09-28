import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavScrollExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Apna Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home">
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </Nav.Link>

            {/* About Us Dropdown */}
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#mission">Our Mission</NavDropdown.Item>
              <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
            </NavDropdown>

            {/* Service Dropdown */}
            <NavDropdown title="Service" id="navbarScrollingDropdown">
              <NavDropdown title="StackHolder" id="navbarScrollingDropdown">
                <NavDropdown.Item href="http://localhost:5173/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:5173/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:5173/donatefood">Food Donate</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="NGO" id="navbarScrollingDropdown">
                <NavDropdown.Item href="http://localhost:5173/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:5173/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="http://localhost:5173/RecentAddPost">Food Distribution</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            {/* Events Dropdown */}
            <NavDropdown title="Events" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#fqa">FQA</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:5173/BlogAndNew">Blog and News</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Dropdown */}
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#email">Email</NavDropdown.Item>
              <NavDropdown.Item href="#instagram">Instagram</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Search Form */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
