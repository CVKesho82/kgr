import React from 'react';
import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import klogo from '../Assets/images/LOGO.jpg';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Buckhead from './Buckhead';
import WestEnd from './WestEnd';

function NavBar() {
  return (
  
  <Navbar fixed="top" bg="light" variant="white" className="nav">
    <Container className="nav">
     <Navbar.Brand href="#home"> 
      <img src={klogo} width="135" height="120"></img>
      </Navbar.Brand> 
    <Nav className="me-auto">
      <Nav.Link className="navbar-link" href="AboutUs">About Us</Nav.Link>
      <NavDropdown title="Properties" id="navbarScrollingDropdown">
          <NavDropdown.Item href="WestEnd">West End, GA</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="Buckhead">Buckhead, GA</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      <Nav.Link className="navbar-link" href="Events">Event Packages</Nav.Link>
      <Nav.Link className="navbar-link" href="Contact">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>  
  )
}

export default NavBar