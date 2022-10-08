import React from 'react';
import {Row, Image, Col, Container} from 'react-bootstrap';
import Exterior from '../Assets/images/Exterior.jpg';
import kitchen from '../Assets/images/kitchentableangel.jpg';
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
  <Container className="photocontainer">
   <h2>Hidden Diamond of Buckhead</h2>
        {/* <Row>
            <Col xs={5} md={4}>
            <Image src={Exterior}  thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={livingroom2} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={kitchen} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={kitchen2}  thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={knook} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={guestbathroom} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={purple}  thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={blue} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={mbath} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={downstairs}  thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={downstairsbunk} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={dsbathroom} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={bedroom2downstairs} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={oseating} thumbnail />
            </Col>
            <Col xs={5} md={4}>
            <Image src={outdoor} thumbnail />
            </Col>
        </Row> */}
  <div className="flex-container">
      <img src={Exterior} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={livingroom2} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={kitchen} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={kitchen2} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={knook} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={guestbathroom} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={purple} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={blue} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={mbath} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={downstairs} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={downstairsbunk} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={dsbathroom} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={bedroom2downstairs} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={oseating} className ="imgsize"></img>
  <div className='flex-item'></div>
      <img src={outdoor} className ="imgsize"></img>
      </div>
      </Container>
  )
}

export default Buckhead