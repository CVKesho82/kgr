import React from 'react';
import {Button} from 'react-bootstrap';
import {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const form = useRef()
    const sendEmail = () => {};
  return (
    <section>
      <div className='formcontainer'><h2>Event Request Form</h2> <br></br>
        <form ref={form} onSubmit={sendEmail}className="--form-control--card --flex-center --dir-column">
        <h4>Please enter your information:</h4>
        <h6>* Fields are required</h6>
          <input type="text" placeholder="First Name*" required/><br></br><br></br>
          <input type="text" placeholder="Last Name*" required/><br></br><br></br>
          <input type="email" placeholder="Email Address*" required/><br></br><br></br>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{9]{4}"placeholder="Phone Number*" required/><br></br> 
                                                                      
          <br></br>
          
          <h4>Please select event type*:</h4>
          <input type="checkbox" id="option1" name="option1" value="PrivateEvent"></input>
          <label for="option1">{" "}Private Event</label><br></br>
          <input type="checkbox" id="option2" name="option2" value="MicroWedding"></input>
          <label for="option2">{" "}Micro Wedding</label><br></br>
          <input type="checkbox" id="option3" name="option3" value="CorporateOffsite"></input>
          <label for="option3">{" "}CorporateOffsite</label><br></br>
          <input type="checkbox" id="option4" name="option4" value="MidtermRental"></input>
          <label for="option4">{" "}Midterm Rental Agreement</label><br></br>
          <input type="checkbox" id="option5" name="option5" value="GeneralInquiry"></input>
          <label for="option5">{" "}General Inquiry</label><br></br>
          
          <br></br>
          <h4>Please select budget range*:</h4>
          <input type="checkbox" id="option6" name="option6" value="$3,000-$5,000"></input>
          <label for="option6">{" "}$3,000-$5,000</label><br></br>
          <input type="checkbox" id="option7" name="option7" value="$5,000-$7,000"></input>
          <label for="option7">{" "}$5,000-$7,000</label><br></br>
          <input type="checkbox" id="option8" name="option8" value="CorporateOffsite"></input>
          <label for="option8">{" "}$7,000-$10,000</label><br></br>
          <input type="checkbox" id="option9" name="option9" value="MidtermRental"></input>
          <label for="option9">{" "}$10,000+</label><br></br>
                    
          <br></br>          
          <label for="startdate"><h4>Select event Start Date*:</h4></label><br></br>
          <input type="date" name="startdate" id="startdate" required /><br></br>
          <label for="enddate"><h4>Select event End Date*:</h4></label><br></br>
          <input type="date" name="enddate" id="enddate" required/><br></br>
          <br></br>
          
          <h4>Additional Details:</h4>
          <textarea name="details" cols="45" rows="10"></textarea>
          <br></br>
          <Button variant="primary" type="submit">
        Submit
          </Button>
          
          </form>       
        
    {/* <>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>First Name</Form.Label>    
      <Form.Control type="text" placeholder="Please enter your first name." required />
    </Form.Group>
        
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Last Name</Form.Label>    
      <Form.Control type="text" placeholder="Please enter your last name." required/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="requestor@mail.com" required/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="phone" placeholder="xxx-xxx-xxxx" required/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicCheckbox" required>
    <Form.Label>Select event type</Form.Label>
        <Form.Check type="checkbox" label="Private Event" />
        <Form.Check type="checkbox" label="Micro Wedding" />
        <Form.Check type="checkbox" label="Corporate Offsite" />
        <Form.Check type="checkbox" label="Midterm Rental" />
        <Form.Check type="checkbox" label="General Inquiry" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicCheckbox" required>
    <Form.Label>Select budget</Form.Label>
        <Form.Check type="checkbox" label="$3,000-$5,000" />
        <Form.Check type="checkbox" label="$5,000-$7,000"/>
        <Form.Check type="checkbox" label="$7,000-$10,000" />
        <Form.Check type="checkbox" label="$10,000 +" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Additional Information</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <br></br> */}

    
{/* </>  */}

</div>
</section>

  )
}

export default Contact