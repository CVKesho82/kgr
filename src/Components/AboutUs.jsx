import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image} from 'react-bootstrap';
/*import Chris from '../Assets/images/chris.jpg';*/

function AboutUs() {
  return (
    <Container className="about">
       
        <div className="tile">
          <h2>Kesho Group, LLC</h2><br></br>
          A real estate investment company started in 2012, the Kesho Group, focuses on offering quality housing for all. <br></br> <br></br>
          /*Chris Kesho, owner of the Kesho Group, is an electrical engineer and has been applying his unique technical perspective to the real estate industry for more than 10 years.*/
        </div>
        /*{/* <div className="tile"> */}
        <Image src = {Chris} width ="220px" height="325px" padding-right="0px"></Image>
        {/* </div> */}*/
  </Container>
  
  );
}

export default AboutUs
