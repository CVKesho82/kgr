import React from 'react';
import {Row, Image, Col, Button, Container} from 'react-bootstrap';
import livingroom from '../Assets/images/livingroom2.jpg';
import camliv2 from '../Assets/images/camillaliving2.jpg';

function Reservations() {
  return (
      
    <div>
      <Container className="tagline"><h2>Relax and We Will Handle the Rest</h2></Container> 
      
      <br></br>
      
      <Container className="bhead">
        <div className="bhead1"> <h4>Hidden Diamond Buckhead</h4>Create lifelong memories in this family friend vacation home. This 3,000 sqft private home is nestled in a quiet, safe, and mature Buckhead neighborhood footsteps from the best shopping, the fanciest restaurants, and multiple grocery stores.
    
        Outside there is a fenced-in backyard providing safety while you enjoy the pergola, swingset, and outdoor games like corn hole. Inside you will find plenty of space for large groups. Enjoy the company of others in the 3 living rooms. Use the dining room with its 10 person table as a study area or a work office. The well stocked kitchen includes all the equipment needed to cook and serve most meals. Retreat to any of the 4 bedrooms and watch TV or let the TV watch you.

        <br></br>Enjoy your vacation without having to mask up around other hotel guests, fitting everyone into cramped rooms, paying for overpriced parking, or remembering the “do not disturb” sign on the door every time you need peace and quiet.

        Book now, you're worth it! 
    </div>
    
    <div>
      <Image src={livingroom} width='80%'></Image>
      
    </div> 
  
    <div className="buttons">
        <Button size="sm" href="https://www.airbnb.com/h/HiddenDiamondBuckhead">Airbnb</Button> {" "}
        <Button size="sm" href="https://www.vrbo.com/2625615">VRB0</Button>{" "}
        <Button size="sm"href="#">Request Event</Button>
    </div>
      </Container>
        <br></br>        
        
      <Container className="aview">
        <div className="aview1">
          <h4>Hidden Diamond Ashview Heights</h4>
    
          Less than a mile away from Mercedes Benz Stadium! That is walking distance. Don't get stuck in traffic, be close to all the hottest places in town.

          This property is close to public transportation, Georgia World Congress Center, Mercedes Benz Stadium, Atlanta University Center, Phillips Arena, Georgia Aquarium, Centennial Park, College Football Hall of Fame, Peter St, westside beltline and so much more.  
        </div>
      <div>
    <Image src={camliv2} width='80%'></Image>
        </div>  
    <div className="buttons">
    <Button size="sm" href="Airbnb // https://www.airbnb.com/h/HiddenDiamond">Airbnb</Button>{" "}
        <Button size="sm" href="#">Request Event</Button><br></br> 
    </div>
    </Container>    
    </div>
  )
}

export default Reservations