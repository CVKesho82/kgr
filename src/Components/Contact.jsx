import React from 'react';
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <Form>
    <div className='formcontainer'><h2>Event Request Form</h2> 
    <>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>First Name</Form.Label>    
      <Form.Control type="text" placeholder="Please enter your first name." />
    </Form.Group>
        
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Last Name</Form.Label>    
      <Form.Control type="text" placeholder="Please enter your last name." />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="requestor@mail.com"/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="phone" placeholder="xxx-xxx-xxxx" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Private Event" />
        <Form.Check type="checkbox" label="Micro Wedding" />
        <Form.Check type="checkbox" label="Corporate Offsite" />
        <Form.Check type="checkbox" label="Midterm Rental" />
        <Form.Check type="checkbox" label="General Inquiry" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Additional Information</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <br></br>

    <Button variant="primary" type="submit">
        Submit
    </Button>
</> 
</div>
</Form>
  )
}

export default Contact