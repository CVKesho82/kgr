import React from 'react';
<<<<<<< HEAD
import {useNavigate} from 'react-router-dom';
import {Image, Button, Container, ButtonGroup} from 'react-bootstrap';
=======
import { useNavigate } from 'react-router-dom';
import { Image, Button, Container } from 'react-bootstrap';
>>>>>>> 5253a02bf22bc808920beda9ac71d122cb566d55
import livingroom from '../Assets/images/livingroom2.jpg';
import camliv2 from '../Assets/images/camillaliving2.jpg';
import banner from '../Assets/images/Banner_100_percent_width.png';



function Reservations() {

  return (
    <div>
<<<<<<< HEAD
      <Container className="tagline" style = {{ backgroundImage: `url(${banner})`, height:'38vh'}}><br></br><br></br><br></br><br></br>
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
          <Image src={livingroom} width='93%'></Image>   
        </div>         
        
        <div className="buttons" align="center">
          <Button variant="outline-danger" size="sm" href="https://www.airbnb.com/h/HiddenDiamondBuckhead">Airbnb</Button><br></br><br></br>
          <Button variant="outline-danger" size="sm" href="https://www.vrbo.com/2625615">VRB0</Button><br></br><br></br>
          <Button variant="outline-danger" size="sm" href="https://www.keshogrouprentals.com/EventRequest">Request Weddings & Events</Button><br></br><br></br>
        </div>
      </Container>  
      
=======
      <Container className="tagline" style={{ backgroundImage: `url(${banner})`, backgroundSize: '100%', backgroundPositionX: 'center', backgroundPositionY: '65%', backgroundRepeat: 'no-repeat', height: '38vh' }}><br></br><br></br><br></br><br></br>
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
          <Image src={livingroom} width='93%' border-radius="10px"></Image>
          <div className="buttons" align="center">
            <Button variant="outline-danger" size="sm" href="https://www.airbnb.com/h/HiddenDiamondBuckhead">Airbnb</Button> <br></br><br></br>
            <Button variant="outline-danger" size="sm" href="https://www.vrbo.com/2625615">VRB0</Button><br></br><br></br>
            <Button variant="outline-danger" size="sm" href="https://www.keshogrouprentals.com/EventRequest">Request Weddings & Events</Button><br></br>
          </div>
        </div>

      </Container>
>>>>>>> 5253a02bf22bc808920beda9ac71d122cb566d55
      <br></br>
      <br></br>

      <Container className="aview">
        <div className="aview1">
          <h4>Hidden Diamond of Ashview Heights</h4>
          <br></br>
          Don't get stuck in traffic, be close to all the hottest places in town. Walk to Clark Atlanta University, Morehouse College, Spelman College, and the Westside beltline. Less than two miles from Georgia World Congress Center, Mercedes Benz Stadium, and State Farm Arena. Clean, safe, and quiet city experience at an affordable price.
          <br></br><br></br>
<<<<<<< HEAD
          2 bedrooms | 1 bath | 1,000 sqft   
        </div>
        <div>
          <Image src={camliv2} width='93%'></Image>
        </div>  
        
        <div className="buttons" align="center">
          <Button variant="outline-danger" size="sm"  href="Airbnb // https://www.airbnb.com/h/HiddenDiamond">Airbnb</Button>
          </div>
        </Container>    
=======
          2 bedrooms | 1 bath | 1,000 sqft


        </div>
        <div>
          <Image src={camliv2} width='93%'></Image>
        </div>
        <div className="buttons" align="center">
          <Button variant="outline-danger" size="sm" href="Airbnb // https://www.airbnb.com/h/HiddenDiamond">Airbnb</Button></div>
      </Container>
>>>>>>> 5253a02bf22bc808920beda9ac71d122cb566d55
    </div>
  )
}

export default Reservations
