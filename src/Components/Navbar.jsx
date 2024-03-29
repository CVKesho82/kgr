import React from 'react';
import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KESHOGROUP from '../Assets/images/KeshoGroupLogoV2_no_stroke.png';


function NavBar() {
  return (  
  <Navbar collapseOnSelect expand="sm" fixed="top" bg="light" variant="white" className="nav">
    <Navbar.Brand href="Reservations"> 
      <img src={KESHOGROUP} img id='logo' width="115" height="100"></img>
      </Navbar.Brand> 
        <Container className="nav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav className="me-auto">
      <Nav.Link className="navbar-link" href="Reservations">Reservations</Nav.Link>
      <NavDropdown autosize = "true" className="dropdown" title="Gallery" id="navbarScrollingDropdown">
          <NavDropdown.Item autosize = "true" href="HiddenDiamondBuckhead">Hidden Diamond of Buckhead</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item href="HiddenDiamondAshviewHeights">Hidden Diamond of Ashview Heights</NavDropdown.Item>
          {/* <NavDropdown.Divider />             */}
        </NavDropdown>
      <Nav.Link className="navbar-link" href="EventRequest">Event Requests</Nav.Link>
      <Nav.Link className="navbar-link" href="AboutUs">About Us</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>  
  )
}

export default NavBar


