import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Image, Button, Container, ButtonGroup} from 'react-bootstrap';
import livingroom from '../Assets/images/livingroom2.jpg';
import camliv2 from '../Assets/images/camillaliving2.jpg';
import banner from '../Assets/images/Banner_25_percent_width.png';
import HiddenDiamondBuckhead from '../Components/HiddenDiamondBuckhead';
import HiddenDiamondAshviewHeights from '../Components/HiddenDiamondAshviewHeights';



function Reservations() {

  return (
    <div>
      <Container className="tagline" style = {{ backgroundImage: `url(${banner})`/*,backgroundSize: '100%'*/, backgroundPositionX: 'center', backgroundPositionY: '65%', backgroundRepeat: 'no-repeat',height:'40vh'}}><br></br><br></br><br></br><br></br>
        <h5>Relax and We Will Handle the Rest</h5>      
      </Container>
       
      <br></br>
      
      <Container className="bhead">
        <div className="bhead1"> <h4>Hidden Diamond of Buckhead</h4>
          <br></br>
            Create lifelong memories in this family friendly vacation home. This 3,000 sqft private home is nestled in a quiet, safe, and mature Buckhead neighborhood footsteps from the best shopping, finest restaurants, multiple grocery stores, and more!
          <br></br>
          <br></br>
        4 bedrooms | 2.5 baths | 3,000 sqft | ½ acre lot       
        </div> 
                
        <div>
          <a href="https://www.keshogrouprentals.com/HiddenDiamondBuckhead"><Image src={livingroom} width='93%' height="425vh" gap="10px"></Image></a>  
        </div>      
        
        <div className="buttons" align="center">
          <Button variant="outline-danger" size="sm" href="https://www.airbnb.com/h/HiddenDiamondBuckhead">Airbnb</Button><br></br><br></br>
          <Button variant="outline-danger" size="sm" href="https://www.vrbo.com/2625615">VRB0</Button><br></br><br></br>
          <Button variant="outline-danger" size="sm" href="https://www.keshogrouprentals.com/EventRequest">Request Weddings & Events</Button><br></br><br></br>
          <Button variant="outline-danger" size="sm" href="https://www.honeybook.com/widget/kesho_group_llc_249517/cf_id/64199c151caa77002d168106">Book Now</Button><br></br><br></br>
        
        </div>
      </Container>  
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Container className="aview">
        <div className="aview1">
          <h4>Hidden Diamond of Ashview Heights</h4>
          <br></br>
          Don't get stuck in traffic, be close to all the hottest places in town. Walk to Clark Atlanta University, Morehouse College, Spelman College, and the Westside beltline. Less than two miles from Georgia World Congress Center, Mercedes Benz Stadium, and State Farm Arena. Clean, safe, and quiet city experience at an affordable price.
          <br></br><br></br>
          2 bedrooms | 1 bath | 1,000 sqft   
        </div>
        <div>
          <a href="https://www.keshogrouprentals.com/HiddenDiamondAshviewHeights"><Image src={camliv2} width='93%'></Image></a>
        </div>  
     
        <div className="buttons" align="center">
          <Button variant="outline-danger" size="sm"  href="Airbnb // https://www.airbnb.com/h/HiddenDiamond">Airbnb</Button><br></br><br></br>
          <Button variant="outline-danger" size="sm"  href="https://www.honeybook.com/widget/kesho_group_llc_249517/cf_id/63f7a7550d45c505d338a588">Book Now</Button>
          </div>
        </Container>    
    </div>
  )
}

export default Reservations
