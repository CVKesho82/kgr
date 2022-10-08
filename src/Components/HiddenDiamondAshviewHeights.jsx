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
   <h2>Hidden Diamond of Ashview Heights</h2>
        {/* <Row>
            <Col xs={3} md={4}>
            <Image src={camout}  thumbnail />
            </Col>
            <Col xs={3} md={4}>
            <Image src={camliv3}  thumbnail />
            </Col>
            <Col xs={3} md={4}>
            <Image src={camliv} thumbnail />
            </Col>
            <Col xs={3} md={4}>
            <Image src={camliv2} thumbnail />
            </Col>
            <Col xs={3} md={4}>
            <Image src={camdining} thumbnail />
            </Col>
            <Col xs={3} md={4}>
            <Image src={cambed} thumbnail />
            </Col>
            <Col xs={3} md={3}>
            <Image src={cambath} thumbnail />
            </Col>
            
        </Row> */}
        
    <div className="flex-container">
      <img src={camout} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={camliv3} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={camliv} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={camliv2} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={camdining} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={cambed} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={cambath} className ="imgsize"></img>    
</div>
</Container>    
    </div>
  )
}

export default WestEnd