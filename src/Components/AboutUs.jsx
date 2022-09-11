import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Col,CardText,CardTitle,Row, CardBody, CardImage} from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about">
    <br></br>
    <div>
    
    <Card className="mb-3" style={{ maxWidth: '540px' }}>
  <Row className="g-0">
    <Col md={4}>
      <CardImage src="/images/react400.jpg" />
    </Col>
    <Col md={8}>
      <CardBody>
        <CardTitle>Kesho Group</CardTitle>
        <CardText>
        The Kesho Group, a real estate investment company started in 2012, focuses on offering quality housing for all. <br></br>

        Chris Kesho, owner of the Kesho Group, is an electrical engineer and has been applying his unique technical perspective to the real estate industry for more than 10 years. <br></br>
        <br></br>
        </CardText>
        <CardText>
          <small className="text-medium-emphasis">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </Col>
  </Row>
</Card>

 
    <br></br>     
    </div> 
    </div>
  )
}

export default AboutUs