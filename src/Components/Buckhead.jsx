import React from 'react';
import {Row, Image, Col, Container} from 'react-bootstrap';
import Exterior from '../Assets/images/Exterior.jpg';
import kitchen from '../Assets/images/kitchentableangel.jpg';
import bathroom from '../Assets/images/bathroom.jpg';
import livingroom2 from '../Assets/images/livingroom2.jpg';
import guestbathroom from '../Assets/images/guestbathroom.jpg';
import downstairs from '../Assets/images/downstairs.jpg';
import downstairsbunk from '../Assets/images/downstairsbunk.jpg';
import bedroom2downstairs from '../Assets/images/bedroom2downstairs.jpg';
import kitchen2 from '../Assets/images/kitchen2.jpg';
import outdoor from '../Assets/images/outdoor.jpg';
import knook from '../Assets/images/knook.jpg';
import purple from '../Assets/images/purple.jpg';
import blue from '../Assets/images/blue.jpg';
import mbath from '../Assets/images/mbath.jpg';
import oseating from '../Assets/images/oseating.jpg';
import dsbathroom from '../Assets/images/dsbathroom.jpg';

function Buckhead() {
  return (
    <div>Buckhead
    
   
   <Container className="photocontainer">
   <h3>Hidden Diamond of Buckhead</h3>
   <div></div>
        <Row>
            <Col xs={5} md={3}>
            3000 sqft <br></br>
            4 bedrooms<br></br>
            2.5 bathrooms<br></br>
            Sleeps 12<br></br>
            Kid Friendly<br></br>
            </Col>
            <Col xs={5} md={3}>
            <Image src={Exterior}  thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={livingroom2} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={kitchen} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={kitchen2}  thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={knook} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={guestbathroom} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={purple}  thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={blue} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={mbath} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={downstairs}  thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={downstairsbunk} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={dsbathroom} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={bedroom2downstairs} thumbnail />
            </Col>
            <Col xs={6} md={3}>
            <Image src={oseating} thumbnail />
            </Col>
            <Col xs={5} md={3}>
            <Image src={outdoor} thumbnail />
            </Col>
        </Row>
</Container>
    
</div>
  )
}

export default Buckhead