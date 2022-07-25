import React from 'react';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div className='formcontainer'><h3>Contact Us</h3> 
    <>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Last Name, First Name</Form.Label>    
    <Form.Control type="text" placeholder="Monet, Janelle" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="phonenumber" placeholder="xxx-xxx-xxxx" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short event description (include date and number of guests)</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <br></br>
</> 
</div>
  )
}

export default Contact