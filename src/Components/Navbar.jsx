import React from 'react';
import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import KESHOGROUP from '../Assets/images/KESHOGROUP.jpg';

function NavBar() {
  return (  
  <Navbar fixed="top" bg="light" variant="white" className="nav">
    <Container className="nav">
     <Navbar.Brand href="Home"> 
      <img src={KESHOGROUP} width="135" height="120"></img>
      </Navbar.Brand> 
    <Nav className="me-auto">
      <Nav.Link className="navbar-link" href="AboutUs">About Us</Nav.Link>
      <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
          <NavDropdown.Item href="WestEnd">West End, GA</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="Buckhead">Buckhead, GA</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      <Nav.Link className="navbar-link" href="Events">Custom Events</Nav.Link>
      <Nav.Link className="navbar-link" href="Contact">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>  
  )
}

export default NavBar