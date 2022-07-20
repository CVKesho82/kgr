import React from 'react';
import {Row,Col, Container} from 'react-bootstrap';

function Events() {
  return (
    <div>EventPackages
     <Container className="textcontainer">
   <div></div>
        <Row>
            <Col xs={6} md={4}>
            <h3>Small Weddings</h3>
            12 hour rental <br></br>
            Grooms dressing room
            Bridal dressing room
            Up to 25 guests <br></br>
            Outdoor ceremony and reception <br></br>
            Bar/catering upon request <br></br>
            Valet parking <br></br>
            </Col>
            <Col xs={6} md={4}>
            <h3>Indoor/Outdoor Celebration Picnic </h3>
            10 hour rental (1 hour setup, 1 hour breakdown included)
            1 hour setup 
            1 hour breakdown 
            
            </Col>
            <Col xs={6} md={4}>
            <h3>Corporate Retreats</h3>
            10 hour rental 
            </Col>
            
            </Row>
</Container>
    
    
    </div>
  )
}

export default Events