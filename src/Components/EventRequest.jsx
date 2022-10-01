import React from 'react';
import {Button} from 'react-bootstrap';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventRequest() {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8u27ngb', 'template_uagbs2r', form.current, 'jbt0gOSKpV5GMtX5t')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.preventDefault();
      alert("Thank you for your inquiry. A member of our team will contact you within 48 hours.")
      e.target.reset();
    };
  return (
    <section>
      <div className='formcontainer'><h2>Event Request Form</h2> <br></br>
        <form ref={form} onSubmit={sendEmail}className="--form-control --card --flex-center --dir-column">
        <h4>Please enter your information:</h4>
        <h6>* Fields are required</h6>
          <input type="text" placeholder="First Name*" name="customer_first_name" required/><br></br><br></br>
          <input type="text" placeholder="Last Name*" name="customer_last_name" required/><br></br><br></br>
          <input type="email" placeholder="Email Address*" name="customer_email"required/><br></br><br></br>
          <input type="tel" id="phone" name="customer_phone" pattern="[0-9]{3}-[0-9]{9]{4}"placeholder="Phone Number*" required/><br></br> 
                                                                      
          <br></br>
          
          <h4>Please select event type*:</h4>
          <input type="checkbox" id="option1" name="customer_option1" value="PrivateEvent"></input>
          <label for="option1">{" "}Private Event</label><br></br>
          <input type="checkbox" id="option2" name="customer_option2" value="MicroWedding"></input>
          <label for="option2">{" "}Micro Wedding</label><br></br>
          <input type="checkbox" id="option3" name="customer_option3" value="CorporateOffsite"></input>
          <label for="option3">{" "}CorporateOffsite</label><br></br>
          <input type="checkbox" id="option4" name="customer_option4" value="MidtermRental"></input>
          <label for="option4">{" "}Midterm Rental Agreement</label><br></br>
          <input type="checkbox" id="option5" name="customer_option5" value="GeneralInquiry"></input>
          <label for="option5">{" "}General Inquiry</label><br></br>
          
          <br></br>
          <h4>If inquring about an event, please share your budget:</h4>
          <input type="number" name="customer_budget"placeholder="ex: $3000.00"></input>
                    
          <br></br>          
          <label for="startdate"><h4>Select event Start Date*:</h4></label><br></br>
          <input type="date" name="startdate" id="startdate" required /><br></br>
          <label for="enddate"><h4>Select event End Date*:</h4></label><br></br>
          <input type="date" name="enddate" id="enddate" required/><br></br>
          <br></br>
          
          <h4>Additional Details:</h4>
          <textarea name="customer_event_details" cols="30" rows="10"></textarea>
          <br></br>
          <Button variant="outline-danger" type="submit">
        Submit
          </Button>
          
          </form>   

    
</div>
</section>

  )
}

export default EventRequest