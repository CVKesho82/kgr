import React from 'react';
import {Row, Image, Col, Container} from 'react-bootstrap';
import camdining from '../Assets/images/camilladining.jpg';
import camliv from '../Assets/images/camillaliving4.jpg';
import camout from'../Assets/images/camillaoutdoor.jpg';
import cambath from '../Assets/images/camillabathroom.jpg';
import cambed from '../Assets/images/cambed.jpg';
import camliv3 from '../Assets/images/camillaliving3.jpg';
import camliv2 from '../Assets/images/camillaliving2.jpg';

function WestEnd() {
  return (
    <div>WestEnd
     <Container className="photocontainer">
   <h3>Hidden Diamond of Ashview Heights</h3>
   <div></div>
        <Row>
            <Col xs={5} md={3}>
            1460 sqft <br></br>
            2 bedrooms<br></br>
            1 bathroom<br></br>
            Sleeps 6<br></br>
            </Col>
            <Col xs={5} md={3}>
            <Image src={camout}  thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={camliv3}  thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={camliv} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={camliv2} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={camdining} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={cambed} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={cambath} thumbnail />
            </Col>
            
        </Row>
</Container>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default WestEnd