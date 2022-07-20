import React from 'react';
import {Form, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div className='formcontainer'>Contact Us 
    <>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <br></br>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short event description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <br></br>

 
</> 
</div>
  )
}

export default Contact